import { syntaxTree } from "@codemirror/language";

function getCurrentInlineToken(view) {
    const state = view.state;
    const tree = syntaxTree(state);
    let inlineFormat = null;
    let inlineNode = null;

    const trees = [
    tree.resolve(state.selection.main.head, -1),
    tree.resolve(state.selection.main.head, 1),
    ];

    // let n = treeBefore;
    // let tags = [];

    const marks = {
        StrongEmphasis: "bold",
        Emphasis: "italic",
        InlineCode: "code",
    };

    for (let n of trees) {
        do {
            // tags.push(n.name);
            if (marks[n.name]) {
            inlineFormat = marks[n.name];
            inlineNode = n;
            break;
            }
        } while ((n = n.parent));
    }

    return {
        format: inlineFormat,
        node: inlineNode,
    };
}


function toggleWrap(view, mark) {
    const { format, node } = getCurrentInlineToken(view);
    const state = view.state;
    const sel = state.selection.main;

    // Should really match https://unicode.org/reports/tr29/#Default_Word_Boundaries
    const WORD_BOUNDARY_REGEX = /[ \.:,;–—!¡?¿"'«»„““”\[\]\(\)\r\n]/
    // console.log("f", format, node, )

    if (format !== null && view.state.sliceDoc(node.from, node.from + mark.length) === mark) {
        // Remove format
        const selStart = sel.from;
        const selfEnd = sel.to;
        view.dispatch({ changes: {from: node.from, to: node.to, insert: state.sliceDoc(node.from + 2, node.to - 2)} })
        view.dispatch({ selection: {anchor: selStart - mark.length }})
    } else {
        if (sel.from === sel.to) {
            // no selection
            if (WORD_BOUNDARY_REGEX.test(state.sliceDoc(sel.from - 1, sel.from))) {
                // cursor before word
                const peekAhead = state.sliceDoc(sel.from, sel.from + 100);
                const nextWord = peekAhead.split(/(\b|\.)/)[0];
                view.dispatch({ changes: {from: sel.from, to: sel.from + nextWord.length, insert: mark + nextWord + mark} });
                view.dispatch({ selection: { anchor: mark.length + sel.from } });
            } else if (WORD_BOUNDARY_REGEX.test(state.sliceDoc(sel.from, sel.from + 1))) {
                const peekBack = state.sliceDoc(sel.from - 100, sel.from);
                const prevWord = peekBack.split(/(\b|\.)/).reverse()[0];
                view.dispatch({ changes: {from: sel.from - prevWord.length, to: sel.from, insert: mark + prevWord + mark} });
                view.dispatch({ selection: { anchor: mark.length + sel.from } });
            } else {

            }
        }
        // const txt = view.state.sliceDoc(view.state.selection.main.from, view.state.selection.main.to);
        // view.dispatch(view.state.replaceSelection(mark + txt + mark));
    }
    // console.log("mm", token);
}

export default [
    {
        key: "Crtl-b",
        mac: "Cmd-b",
        run: view => toggleWrap(view, "**")
    },
    {
        key: "Crtl-i",
        mac: "Cmd-i",
        run: view => toggleWrap(view, "*")
    },
];