/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'BugTracker.Application',

    name: 'BugTracker',

    requires: [
        // This will automatically load all classes in the BugTracker namespace
        // so that application classes do not need to require each other.
        'BugTracker.*'
    ],

    // The name of the initial view to create.
    mainView: 'BugTracker.view.main.Main'
});
