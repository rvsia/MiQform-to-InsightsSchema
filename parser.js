const INPUT = {
    "href": "http://localhost:3000/api/service_dialogs/56",
    "id": "56",
    "description": "This is a description",
    "buttons": "submit,cancel",
    "created_at": "2018-10-15T09:10:22Z",
    "updated_at": "2018-10-15T09:10:22Z",
    "label": "This a title",
    "content": [
        {
            "href": "http://localhost:3000/api/service_dialogs/56",
            "id": "56",
            "description": "This is a description",
            "buttons": "submit,cancel",
            "created_at": "2018-10-15T09:10:22Z",
            "updated_at": "2018-10-15T09:10:22Z",
            "label": "This a title",
            "dialog_tabs": [
                {
                    "href": "http://localhost:3000/api/service_dialogs/540",
                    "id": "540",
                    "description": null,
                    "display": null,
                    "created_at": "2018-10-15T09:10:21Z",
                    "updated_at": "2018-10-15T09:10:22Z",
                    "label": "New tab",
                    "display_method": null,
                    "display_method_options": null,
                    "dialog_id": "56",
                    "position": 0,
                    "dialog_groups": [
                        {
                            "href": "http://localhost:3000/api/service_dialogs/618",
                            "id": "618",
                            "description": "Description",
                            "display": "edit",
                            "created_at": "2018-10-16T11:22:55Z",
                            "updated_at": "2018-10-16T11:56:44Z",
                            "label": "New Section",
                            "display_method": null,
                            "display_method_options": null,
                            "dialog_tab_id": "540",
                            "position": 0,
                            "dialog_fields": [
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4239",
                                    "id": "4239",
                                    "name": "textarea_box_3_1",
                                    "description": "",
                                    "data_type": null,
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": null,
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "protected": false
                                    },
                                    "created_at": "2018-10-16T11:22:55Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Text Area",
                                    "dialog_group_id": "618",
                                    "position": 0,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldTextAreaBox",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4240",
                                    "id": "4240",
                                    "name": "text_box_3_1",
                                    "description": "",
                                    "data_type": null,
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": null,
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "protected": false
                                    },
                                    "created_at": "2018-10-16T11:22:55Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Text Box",
                                    "dialog_group_id": "618",
                                    "position": 1,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldTextBox",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4241",
                                    "id": "4241",
                                    "name": "dropdown_list_2_1",
                                    "description": "",
                                    "data_type": "string",
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": true,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": [
                                        [
                                            null,
                                            "<Choose>"
                                        ],
                                        [
                                            "1",
                                            "One"
                                        ],
                                        [
                                            "3",
                                            "Three"
                                        ],
                                        [
                                            "2",
                                            "Two"
                                        ]
                                    ],
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "sort_by": "description",
                                        "sort_order": "ascending",
                                        "force_multi_value": false
                                    },
                                    "created_at": "2018-10-16T11:22:55Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Dropdown",
                                    "dialog_group_id": "618",
                                    "position": 2,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldDropDownList",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4242",
                                    "id": "4242",
                                    "name": "check_box_2",
                                    "description": "",
                                    "data_type": null,
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": null,
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "protected": false
                                    },
                                    "created_at": "2018-10-16T11:22:55Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Check Box",
                                    "dialog_group_id": "618",
                                    "position": 3,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldCheckBox",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4243",
                                    "id": "4243",
                                    "name": "dropdown_list_2",
                                    "description": "",
                                    "data_type": "string",
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": [
                                        [
                                            null,
                                            "<None>"
                                        ],
                                        [
                                            "1",
                                            "One"
                                        ],
                                        [
                                            "3",
                                            "Three"
                                        ],
                                        [
                                            "2",
                                            "Two"
                                        ]
                                    ],
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "sort_by": "description",
                                        "sort_order": "ascending",
                                        "force_multi_value": false
                                    },
                                    "created_at": "2018-10-16T11:22:55Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Dropdown",
                                    "dialog_group_id": "618",
                                    "position": 4,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldDropDownList",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4244",
                                    "id": "4244",
                                    "name": "radio_button_3",
                                    "description": "",
                                    "data_type": "string",
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": [
                                        [
                                            "1",
                                            "One"
                                        ],
                                        [
                                            "2",
                                            "Two"
                                        ],
                                        [
                                            "3",
                                            "Three"
                                        ]
                                    ],
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "sort_by": "description",
                                        "sort_order": "ascending"
                                    },
                                    "created_at": "2018-10-16T11:22:55Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Radio Button",
                                    "dialog_group_id": "618",
                                    "position": 5,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldRadioButton",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4245",
                                    "id": "4245",
                                    "name": "date_control_2",
                                    "description": "",
                                    "data_type": null,
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": null,
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "show_past_dates": false
                                    },
                                    "created_at": "2018-10-16T11:22:55Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Datepicker",
                                    "dialog_group_id": "618",
                                    "position": 6,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldDateControl",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4246",
                                    "id": "4246",
                                    "name": "date_time_control_2",
                                    "description": "",
                                    "data_type": null,
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": null,
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "show_past_dates": false
                                    },
                                    "created_at": "2018-10-16T11:22:55Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Timepicker",
                                    "dialog_group_id": "618",
                                    "position": 7,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldDateTimeControl",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4247",
                                    "id": "4247",
                                    "name": "tag_control_1",
                                    "description": "",
                                    "data_type": "string",
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": [],
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "category_id": null,
                                        "force_single_value": false,
                                        "sort_by": "description",
                                        "sort_order": "ascending"
                                    },
                                    "created_at": "2018-10-16T11:22:55Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Tag Control",
                                    "dialog_group_id": "618",
                                    "position": 8,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldTagControl",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                }
                            ]
                        },
                        {
                            "href": "http://localhost:3000/api/service_dialogs/619",
                            "id": "619",
                            "description": "That's you!!!",
                            "display": null,
                            "created_at": "2018-10-15T09:10:21Z",
                            "updated_at": "2018-10-16T11:56:44Z",
                            "label": "Information about you",
                            "display_method": null,
                            "display_method_options": null,
                            "dialog_tab_id": "540",
                            "position": 1,
                            "dialog_fields": [
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4248",
                                    "id": "4248",
                                    "name": "textarea_box_1",
                                    "description": "dsdfsdfsddsadsadsadsadsadsadsadsad",
                                    "data_type": null,
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": null,
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "protected": false
                                    },
                                    "created_at": "2018-10-15T09:10:21Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Text Area",
                                    "dialog_group_id": "619",
                                    "position": 0,
                                    "validator_type": null,
                                    "validator_rule": "",
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldTextAreaBox",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4249",
                                    "id": "4249",
                                    "name": "text_box_1",
                                    "description": "",
                                    "data_type": null,
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": null,
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "protected": false
                                    },
                                    "created_at": "2018-10-15T09:10:21Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Text Box",
                                    "dialog_group_id": "619",
                                    "position": 1,
                                    "validator_type": null,
                                    "validator_rule": "[0-9]",
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldTextBox",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4250",
                                    "id": "4250",
                                    "name": "check_box_1",
                                    "description": "",
                                    "data_type": null,
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": null,
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "protected": false
                                    },
                                    "created_at": "2018-10-15T09:10:21Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Check Box",
                                    "dialog_group_id": "619",
                                    "position": 2,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldCheckBox",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4251",
                                    "id": "4251",
                                    "name": "dropdown_list_1",
                                    "description": "",
                                    "data_type": "string",
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": [
                                        [
                                            null,
                                            "<None>"
                                        ],
                                        [
                                            "1",
                                            "One"
                                        ],
                                        [
                                            "3",
                                            "Three"
                                        ],
                                        [
                                            "2",
                                            "Two"
                                        ]
                                    ],
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "sort_by": "description",
                                        "sort_order": "ascending",
                                        "force_multi_value": false
                                    },
                                    "created_at": "2018-10-15T09:10:21Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Dropdown",
                                    "dialog_group_id": "619",
                                    "position": 3,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldDropDownList",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4252",
                                    "id": "4252",
                                    "name": "radio_button_1_1",
                                    "description": "",
                                    "data_type": "string",
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": [
                                        [
                                            "1",
                                            "One"
                                        ],
                                        [
                                            "2",
                                            "Two"
                                        ],
                                        [
                                            "3",
                                            "Three"
                                        ]
                                    ],
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "sort_by": "description",
                                        "sort_order": "ascending"
                                    },
                                    "created_at": "2018-10-15T09:10:21Z",
                                    "updated_at": "2018-10-16T11:56:43Z",
                                    "label": "Radio Button",
                                    "dialog_group_id": "619",
                                    "position": 4,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldRadioButton",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                }
                            ]
                        },
                        {
                            "href": "http://localhost:3000/api/service_dialogs/620",
                            "id": "620",
                            "description": "Description of time",
                            "display": "edit",
                            "created_at": "2018-10-15T09:10:21Z",
                            "updated_at": "2018-10-16T11:56:44Z",
                            "label": "Choose a time",
                            "display_method": null,
                            "display_method_options": null,
                            "dialog_tab_id": "540",
                            "position": 2,
                            "dialog_fields": [
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4253",
                                    "id": "4253",
                                    "name": "date_control_1",
                                    "description": "",
                                    "data_type": null,
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": null,
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "show_past_dates": false
                                    },
                                    "created_at": "2018-10-15T09:10:21Z",
                                    "updated_at": "2018-10-16T11:56:44Z",
                                    "label": "Datepicker",
                                    "dialog_group_id": "620",
                                    "position": 0,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldDateControl",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4254",
                                    "id": "4254",
                                    "name": "date_time_control_1",
                                    "description": "",
                                    "data_type": null,
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": null,
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "show_past_dates": false
                                    },
                                    "created_at": "2018-10-15T09:10:21Z",
                                    "updated_at": "2018-10-16T11:56:44Z",
                                    "label": "Timepicker",
                                    "dialog_group_id": "620",
                                    "position": 1,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldDateTimeControl",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "href": "http://localhost:3000/api/service_dialogs/541",
                    "id": "541",
                    "description": "New tab 1",
                    "display": "edit",
                    "created_at": "2018-10-15T09:10:22Z",
                    "updated_at": "2018-10-15T09:10:22Z",
                    "label": "New tab 1",
                    "display_method": null,
                    "display_method_options": null,
                    "dialog_id": "56",
                    "position": 1,
                    "dialog_groups": [
                        {
                            "href": "http://localhost:3000/api/service_dialogs/621",
                            "id": "621",
                            "description": "Description",
                            "display": "edit",
                            "created_at": "2018-10-15T09:10:22Z",
                            "updated_at": "2018-10-16T11:56:44Z",
                            "label": "New Section",
                            "display_method": null,
                            "display_method_options": null,
                            "dialog_tab_id": "541",
                            "position": 0,
                            "dialog_fields": [
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4255",
                                    "id": "4255",
                                    "name": "radio_button_1",
                                    "description": "",
                                    "data_type": "string",
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": [
                                        [
                                            "1",
                                            "One"
                                        ],
                                        [
                                            "2",
                                            "Two"
                                        ],
                                        [
                                            "3",
                                            "Three"
                                        ]
                                    ],
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "sort_by": "description",
                                        "sort_order": "ascending"
                                    },
                                    "created_at": "2018-10-15T09:10:21Z",
                                    "updated_at": "2018-10-16T11:56:44Z",
                                    "label": "Radio Button",
                                    "dialog_group_id": "621",
                                    "position": 0,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldRadioButton",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                },
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4256",
                                    "id": "4256",
                                    "name": "radio_button_2",
                                    "description": "",
                                    "data_type": "string",
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": [
                                        [
                                            "1",
                                            "One"
                                        ],
                                        [
                                            "2",
                                            "Two"
                                        ],
                                        [
                                            "3",
                                            "Three"
                                        ]
                                    ],
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "sort_by": "description",
                                        "sort_order": "ascending"
                                    },
                                    "created_at": "2018-10-15T09:10:22Z",
                                    "updated_at": "2018-10-16T11:56:44Z",
                                    "label": "Radio Button",
                                    "dialog_group_id": "621",
                                    "position": 1,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldRadioButton",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "href": "http://localhost:3000/api/service_dialogs/542",
                    "id": "542",
                    "description": "New tab 2",
                    "display": "edit",
                    "created_at": "2018-10-15T09:10:22Z",
                    "updated_at": "2018-10-15T09:10:22Z",
                    "label": "New tab 2",
                    "display_method": null,
                    "display_method_options": null,
                    "dialog_id": "56",
                    "position": 2,
                    "dialog_groups": [
                        {
                            "href": "http://localhost:3000/api/service_dialogs/622",
                            "id": "622",
                            "description": "Description",
                            "display": "edit",
                            "created_at": "2018-10-15T09:10:22Z",
                            "updated_at": "2018-10-16T11:56:44Z",
                            "label": "New Section",
                            "display_method": null,
                            "display_method_options": null,
                            "dialog_tab_id": "542",
                            "position": 0,
                            "dialog_fields": [
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4257",
                                    "id": "4257",
                                    "name": "text_box_2",
                                    "description": "",
                                    "data_type": null,
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": null,
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "protected": false
                                    },
                                    "created_at": "2018-10-15T09:10:22Z",
                                    "updated_at": "2018-10-16T11:56:44Z",
                                    "label": "Text Box",
                                    "dialog_group_id": "622",
                                    "position": 0,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldTextBox",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                }
                            ]
                        },
                        {
                            "href": "http://localhost:3000/api/service_dialogs/623",
                            "id": "623",
                            "description": "Description",
                            "display": "edit",
                            "created_at": "2018-10-15T09:10:22Z",
                            "updated_at": "2018-10-16T11:56:44Z",
                            "label": "New Section",
                            "display_method": null,
                            "display_method_options": null,
                            "dialog_tab_id": "542",
                            "position": 1,
                            "dialog_fields": [
                                {
                                    "href": "http://localhost:3000/api/service_dialogs/4258",
                                    "id": "4258",
                                    "name": "textarea_box_2",
                                    "description": "",
                                    "data_type": null,
                                    "notes": null,
                                    "notes_display": null,
                                    "display": "edit",
                                    "display_method": null,
                                    "display_method_options": {},
                                    "required": false,
                                    "required_method": null,
                                    "required_method_options": {},
                                    "default_value": "",
                                    "values": null,
                                    "values_method": null,
                                    "values_method_options": {},
                                    "options": {
                                        "protected": false
                                    },
                                    "created_at": "2018-10-15T09:10:22Z",
                                    "updated_at": "2018-10-16T11:56:44Z",
                                    "label": "Text Area",
                                    "dialog_group_id": "623",
                                    "position": 0,
                                    "validator_type": null,
                                    "validator_rule": null,
                                    "reconfigurable": false,
                                    "dynamic": false,
                                    "show_refresh_button": false,
                                    "load_values_on_init": false,
                                    "read_only": false,
                                    "auto_refresh": false,
                                    "trigger_auto_refresh": false,
                                    "visible": true,
                                    "type": "DialogFieldTextAreaBox",
                                    "resource_action": {
                                        "action": null,
                                        "resource_type": "DialogField",
                                        "ae_namespace": null,
                                        "ae_class": null,
                                        "ae_instance": null,
                                        "ae_message": null,
                                        "ae_attributes": {}
                                    },
                                    "dialog_field_responders": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "actions": [
        {
            "name": "refresh_dialog_fields",
            "method": "post",
            "href": "http://localhost:3000/api/service_dialogs/56"
        },
        {
            "name": "delete",
            "method": "post",
            "href": "http://localhost:3000/api/service_dialogs/56"
        },
        {
            "name": "edit",
            "method": "post",
            "href": "http://localhost:3000/api/service_dialogs/56"
        },
        {
            "name": "copy",
            "method": "post",
            "href": "http://localhost:3000/api/service_dialogs/56"
        },
        {
            "name": "delete",
            "method": "delete",
            "href": "http://localhost:3000/api/service_dialogs/56"
        }
    ]
};


// (ManageIQ name of component, name of component)
const componentMap = new Map();
componentMap.set("DialogFieldTextBox", "text-field");
componentMap.set("DialogFieldRadioButton", "radio-field");
componentMap.set("DialogFieldCheckBox", "checkbox-field");
componentMap.set("DialogFieldTextAreaBox", "textarea-field");
componentMap.set("DialogFieldDropDownList", "select-field");
componentMap.set("DialogFieldDateControl", "datepicker");
componentMap.set("DialogFieldDateTimeControl", "timepicker");
componentMap.set("DialogFieldTagControl", "tagcontrol");

// if array then the key [0] is renamed as [1]
const needFieldInformation = ["name", "label", ["label", "title"], ["data_type", "dataType"],
    ["required", "isRequired"], ["default_value", "default"], ["visible", "isVisible"], ["read_only", "isReadOnly"]]

const parseJson = (input, needFieldInformation, componentMap) => {
    const title = input['label'];
    const description = input['description'];
    const tabs = input['content'][0]['dialog_tabs'];

    const form_tabs = []
    tabs.forEach((tab) => {
        const groups = [];
        tab['dialog_groups'].forEach((group) => {
            const fields_array = []
            group['dialog_fields'].forEach((field) => {
                const object1 = {};

                // getting info specified in needFieldInformation
                needFieldInformation.forEach((info) => {
                    const attribute = Array.isArray(info) ? info[0] : info;
                    const convertedAttribute = Array.isArray(info) ? info[1] : info;
                    object1[convertedAttribute] = field[attribute];
                })

                // specific cases
                object1["autofocus"] = false;

                if (field["validator_type"]) {
                    object1["validate"] = [{
                        type: field["validator_type"],
                        value: field["validator_rule"]
                    }];
                }

                object1["component"] = componentMap.get(field["type"]);

                object1["options"] = []
                if (Array.isArray(field["values"])) {
                    field["values"].forEach(option => {
                        const option_object = { label: option[1], value: option[0] };
                        if (option[0] === null && field["required"]) {
                            option_object.disabled = true;
                        }
                        object1["options"].push(option_object)
                    });
                };

                fields_array.push(object1);
            })
            groups.push({
                title: group['label'],
                validate: [],
                key: group['id'],
                fields: fields_array,
                component: 'sub-form'
            });
        })
        form_tabs.push({
            title: tab['label'],
            description: tab['description'],
            fields: groups,
            component: 'tabs'
        })
    });

    const schema = {
        title: title,
        description: description,
        fields: form_tabs,
        component: 'tabs'
    }
    return schema;
}


console.log(JSON.stringify(parseJson(INPUT, needFieldInformation, componentMap)));
