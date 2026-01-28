// Current version of CodeMirror does not support proper positioning of the
// tooltip dialog within Kirby’s panel. will save this for later.

// import {CompletionSource, autocompletion, CompletionContext, startCompletion,
//   currentCompletions, completionStatus, completeFromList } from "@codemirror/autocomplete"

// export default function autocomplete() {
//   function from(list) {
//     return (cx) => { /* cx = completitionContext */
//       let word = cx.matchBefore(/\(\w*$/)
//       console.log("word", word, cx);
//       if (!word && !cx.explicit) {
//         console.log("no word")
//         return null;
//       }
//       return {
//         from: word ? word.from : cx.pos,
//         options: list.split(" ").map((word) => ({
//           label: `(${word}: …)`,
//           _insert: `(${word}: )`,
//           apply: (view, completition, from, to) => {
//             console.log("apply");
//             view.dispatch({
//               changes: {from, to, insert: completition._insert},
//               selection: { anchor: from + completition._insert.length - 1 }
//             });
//           }
//           })),
//         // span: /\w*/,
//       }
//     }
//   }

//   return autocompletion({override: [from("link image")]})
// }
