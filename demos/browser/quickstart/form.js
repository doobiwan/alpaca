$(document).ready(function() {

    /**
     * Initial data
     *
     * Fill in the JSON data that should be populated into the form.  This can be any JSON data that you'd like
     * provided that it fits the schema and options (if you provide those).
     *
     */
    var data = {
        "name": "Inigo Montoya",
        "age": 29
    };

    /**
     * JSON-schema for the form
     *
     * The form schema defines the data types, validation logic and other constraints that need to be satisfied in
     * order for the form to be considered valid.
     *
     * This should follow the JSON-schema convention.
     * @see http://json-schema.org
     *
     * Full schema settings are listed here:
     * @see http://www.alpacajs.org
     *
     */
    var schema = {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "age": {
                "type": "number",
                "minimum": 0,
                "maximum": 50
            }
        }
    };

    /**
     * Layout options for the form
     *
     * These options describe UI configuration for the controls that are rendered for the data and schema.  You can
     * tweak the layout and presentation aspects of the form in this section.
     *
     * Full options settings are listed here:
     * @see http://www.alpacajs.org
     *
     */
    var options = {
        "fields": {
            "name": {
                "type": "text"
            },
            "age": {
                "type": "text"
            }
        }
    };

    /**
     * This is an optional post render callback that Alpaca will call once the form finishes rendering.  The form
     * rendering itself is asynchronous as it may load templates or other resources for use in generating the UI.
     *
     * Once the render is completed, this callback is fired and the top-level Alpaca control is handed back.
     *
     * @param control
     */
    var postRenderCallback = function(control) {

    };

    /**
     * If you'd like to define a custom layout (html) file for your form, you first define a new view.
     * A view points to a layout file.  It also lets you override validation messages and other properties
     * about the UI.
     */
    //var view = null;
    var view = Alpaca.registerView({
        "id": "VIEW_CUSTOM",
        "parent": "VIEW_WEB_CREATE",
        "title": "Custom View",
        "layout" : {
            "template": './layout.html',
            "fields": {
                "name": "fields",
                "age": "fields"
            }
        },
        "messages": {
            "stringValueTooSmall": "Please enter a positive value, good sir!",
            "stringValueTooLarge": "Please enter a value less than 50 ({0} is too large)"
        }
     });

    /**
     * Render the form.
     *
     * We call alpaca() with the data, schema and options to tell Alpaca to render into the selected dom element(s).
     *
     */
    $("#form").alpaca({
        "data": data,
        "schema": schema,
        "options": options,
        "postRender": postRenderCallback,
        "view": (view ? view.id : null)
    });
});