var { Hotkey } = require("sdk/hotkeys");

var toggleSystemColorsHotkey = Hotkey({
    combo: "control-alt-shift-c",
    onPress: function() {
        var { get, set } = require("sdk/preferences/service");
        var existing = get("browser.display.use_system_colors");
        if (existing) {
            set("browser.display.use_system_colors", false);
            set("browser.display.document_color_use", 1);
        } else {
            set("browser.display.use_system_colors", true);
            set("browser.display.document_color_use", 2);
        }
    }
});
