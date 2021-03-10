<script>
export default {
  extends: "default",

  data() {
    return {
      label: this.$t("toolbar.button.bold"),
      icon: "bold",
      shortcut: "Mod-B",
      type: "bold",
    };
  },
  computed: {
    active() {
      return false; // this.currentInlineFormat.includes("StrongEmphasis");
    },
  },
  methods: {
    action() {
      this.toggleInlineFormat("**");
    },
  },
};
</script>
