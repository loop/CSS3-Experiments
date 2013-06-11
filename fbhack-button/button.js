function Button(type, $parent) {

    var _class;
    var _text;
    var _icon;
    var _hoverIcon;
    
    switch(type) {
        case "facebook":
            _class = "Facebook";
            _text = "LOGIN";
            _icon = "&#xe000;";
            _hoverIcon = "&#xe000;";
            break;
    }

    var $_button = $(document.createElement('div'));
    $_button.attr("class", "Button " + _class);
    $_button.text(_text);
        var $_icon = $(document.createElement('span'));
        $_icon.attr("class", "Icon");
        $_icon.html(_icon);
        $_button.mouseover( function() {
            $_icon.html(_hoverIcon);
        });
        $_button.mouseout( function() {
            $_icon.html(_icon);
        });
    
    $($parent).append($_button);
    $($_button).append($_icon);

}