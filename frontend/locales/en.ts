import { LocaleMessageObject } from 'vue-i18n';

const msgs: LocaleMessageObject = {
    general: {
        close: 'Close',
        submit: 'Submit',
        comment: 'Comment',
        donate: 'Donate',
        continue: 'Continue',
        create: 'Create',
        delete: 'Delete',
        or: 'Or',
        reset: 'Reset',
    },
    hangar: {
        projectSearch: {
            query: 'Search in {0} projects, proudly made by the community...',
            relevanceSort: 'Sort with relevance',
        },
        subtitle: 'A Minecraft package repository',
        sponsoredBy: 'Sponsored by',
    },
    pages: {
        authors: 'Authors',
        staff: 'Staff',
    },
    nav: {
        login: 'Login',
        signup: 'Signup',
        user: {
            notifications: 'Notifications',
            flags: 'Flags',
            projectApprovals: 'Project approvals',
            versionApprovals: 'Version approvals',
            stats: 'Stats',
            health: 'Hangar Health',
            log: 'User Action Log',
            platformVersions: 'Platform Versions',
            logout: 'Sign out',
        },
        createNew: 'Create new...',
        new: {
            project: 'New Project',
            organization: 'New Organization',
        },
        hangar: {
            home: 'Homepage',
            forums: 'Forums',
            code: 'Code',
            docs: 'Docs',
            javadocs: 'JavaDocs',
            hangar: 'Hangar (Plugins)',
            downloads: 'Downloads',
            community: 'Community',
        },
    },
    project: {
        stargazers: 'Stargazers',
        watchers: 'Watchers',
        category: {
            info: 'Category: {0}',
            admin_tools: 'Admin Tools',
            chat: 'Chat',
            dev_tools: 'Developer Tools',
            economy: 'Economy',
            gameplay: 'Gameplay',
            games: 'Games',
            protection: 'Protection',
            role_playing: 'Role Playing',
            world_management: 'World Management',
            misc: 'Miscellaneous',
        },
        actions: {
            unwatch: 'Unwatch',
            watch: 'Watch',
            flag: 'Flag',
            star: 'Star',
            unstar: 'Unstar',
            adminActions: 'Admin Actions',
            flagHistory: 'Flag history ({0})',
            staffNotes: 'Staff notes ({0})',
            userActionLogs: 'User Action Logs',
            forum: 'Forum',
        },
        flag: {
            flagProject: 'Flag {0}?',
        },
        tabs: {
            docs: 'Docs',
            versions: 'Versions',
            discuss: 'Discuss',
            settings: 'Settings',
            homepage: 'Homepage',
            issues: 'Issues',
            source: 'Source',
            support: 'Support',
        },
        new: {
            step1: {
                title: 'User Agreement',
                text:
                    'A project contains your downloads and the documentation for your plugin.<br>Before continuing, please review the <a href="#">Hangar Submission Guidelines.</a>',
                continue: 'Agree',
                back: 'Abort',
            },
            step2: {
                title: 'Basic Settings',
                continue: 'Continue',
                back: 'Back',
                userselect: 'Create as...',
                projectname: 'Project name',
                projectsummary: 'Project Summary',
                projectcategory: 'Project Category',
            },
            step3: {
                title: 'Additional Settings',
                continue: 'Continue',
                back: 'Back',
                optional: 'Optional',
                links: 'Links',
                homepage: 'Homepage',
                issues: 'Issue Tracker',
                source: 'Source Code',
                support: 'External Support',
                licence: 'Licence',
                type: 'Type',
                customName: 'Name',
                url: 'URL',
                seo: 'SEO',
                keywords: 'Keywords',
            },
            step4: {
                title: 'Import from Spigot',
                continue: 'Continue',
                back: 'Back',
                optional: 'Optional',
                convert: 'Convert',
                preview: 'Preview',
                tutorial: 'How to get the BBCode',
            },
            step5: {
                title: 'Finishing',
                text: 'Creating...',
            },
            error: {
                create: 'There was an error creating the project',
                nameExists: 'A project with this name already exists',
                slugExists: 'A project with this slug already exists',
                invalidName: 'This name contains invalid characters',
            },
        },
        sendForApproval: 'Send for approval',
        info: 'Information',
        publishDate: 'Published on {0}',
        views: '{0} views',
        promotedVersions: 'Promoted Versions',
        license: {
            link: 'Licensed under ',
        },
        error: {
            star: 'Could not toggle starred',
            watch: 'Could not toggle watched',
        },
        settings: {
            title: 'Settings',
            category: 'Category',
            categorySub: 'Categorize your project into one of 10 categories. Appropriately categorizing your project makes it easier for people to find.',
            keywords: 'Keywords',
            keywordsSub: 'These are special words that will return your project when people add them to their searches. Max 5.',
            homepage: 'Homepage',
            homepageSub:
                'Having a custom homepage for your project helps you look more proper, official, and gives you another place to gather information about your project.',
            issues: 'Issue tracker',
            issuesSub: 'Providing an issue tracker helps your users get support more easily and provides you with an easy way to track bugs.',
            source: 'Source code',
            sourceSub: 'Support the community of developers by making your project open source!',
            support: 'External support',
            supportSub: 'An external place where you can offer support to your users. Could be a forum, a Discord server, or somewhere else.',
            license: 'License',
            licenceSub: 'What can people do (and not do) with your project?',
            forum: 'Create posts on the forums',
            forumSub: 'Sets if events like a new release should automatically create a post on the forums',
            description: 'Description',
            descriptionSub: 'A short description of your project (max 120)',
            icon: 'Icon',
            iconSub: 'Upload an image representative of your project.',
            iconUpload: 'Upload',
            apiKey: 'API Keys',
            apiKeySub: 'Generate a unique deployment key to enable build deployment from Gradle',
            apiKeyGenerate: 'Generate',
            rename: 'Rename',
            renameSub: 'Changing your projects name can have undesired consequences. We will not setup any redirects.',
            delete: 'Delete',
            deleteSub: 'Once you delete a project, it cannot be recovered.',
            hardDelete: 'Hard Delete',
            hardDeleteSub: 'Once you delete a project, it cannot be recovered.',
            save: 'Save changes',
            optional: '(optional)',
            licenceCustom: 'Custom',
            licenceType: 'Type',
            licenceUrl: 'URL',
        },
    },
    page: {
        plural: 'Pages',
        new: {
            title: 'Create a new page',
            error: {
                minLength: 'Page contents are too short',
                maxLength: 'Page contents are too long',
                duplicateName: 'A page with that name already exists',
                name: {
                    maxLength: 'Page name too long',
                    minLength: 'Page name too short',
                    invalidChars: 'Page name contained invalid characters',
                },
                save: 'Unable to save page',
            },
            name: 'Page Name',
            parent: 'Parent Page (optional)',
        },
        delete: {
            title: 'Delete page?',
            text: 'Are you sure you want to delete this page? This cannot be undone.',
        },
    },
    version: {
        new: {
            title: 'Create version...',
            upload: 'Upload File',
            uploadNew: 'Upload a new Version',
            url: 'Enter a URL',
            form: {
                versionString: 'Version',
                fileName: 'File name',
                fileSize: 'File size',
                externalUrl: 'External URL',
                channel: 'Channel',
                addChannel: 'Add Channel',
                unstable: 'Unstable',
                recommended: 'Recommended',
                forumPost: 'Forum Post',
                release: {
                    bulletin: 'Release Bulletin',
                    desc: "What's new in this release?",
                },
            },
            error: {
                metaNotFound: 'Could not load metadata from uploaded file',
                jarNotFound: 'Could not open jar file',
                fileExtension: 'Incorrect file extension',
                unexpected: 'An unexpected error occurred',
                invalidVersionString: 'Invalid version string found',
                duplicateNameAndPlatform: 'A version with this name and compatible platform already exists',
                duplicate: 'A version with this file already exists',
                noFile: 'Could not find uploaded file',
                mismatchedFileSize: 'File sizes do not match',
                hashMismatch: 'File hashes do not match',
                invalidPlatformVersion: 'Invalid MC version for a platform specified',
                fileIOError: 'File IO Error',
                unknown: 'An unknown error has occurred',
                incomplete: 'Plugin file missing {0}',
            },
        },
    },
    channel: {
        new: {
            title: 'Add a new channel',
            name: 'Channel Name',
            color: 'Channel Color',
            reviewQueue: 'Exclude from moderation review queue?',
            error: {
                invalidName: 'Invalid channel name',
                maxChannels: 'This project already has the maximum number of channels: {0}',
                duplicateColor: 'This project already has a channel with this color',
                duplicateName: 'This project already has a channel with this name',
            },
        },
    },
    organization: {
        new: {
            title: 'Create a new Organization',
            text: 'Organizations allow you group users provide closer collaboration between them within your projects on Hangar.',
            name: 'Organization Name',
        },
    },
    form: {
        userSelection: {
            addUser: 'Add User...',
            create: 'Create',
        },
    },
    notifications: {
        title: 'Notifications',
        invites: 'Invites',
        invited: 'You have been invited to join {0}',
        readAll: 'Mark all as read',
        unread: 'Unread',
        read: 'Read',
        all: 'All',
        invite: {
            all: 'All',
            projects: 'Projects',
            organizations: 'Organizations',
        },
        empty: {
            unread: 'You have no unread notifications.',
            read: 'You have no read notifications.',
            all: 'You have no notifications.',
            invites: 'You have no invites',
        },
    },
    visibility: {
        notice: {
            new:
                'This project is new, and will not be shown to others until a version has been uploaded. If a version is not uploaded over a longer time the project will be deleted.',
            needsChanges: 'This project requires changes: {0}',
            needsApproval: 'You have sent the project for review',
            softDelete: 'Project deleted by {0}',
        },
        name: {
            new: 'New',
        },
    },
    author: {
        watching: 'Watching',
        stars: 'Stars',
        orgs: 'Organizations',
        viewOnForums: 'View on forums ',
        memberSince: 'A member since {}',
        numProjects: '{0} project(s)',
        addTagline: 'Add a tagline',
    },
    linkout: {
        title: 'External Link Warning',
        text: 'You have clicked on an external link to "{0}". If you did not intend to visit this link, please go back. Otherwise, click continue.',
        abort: 'Go Back',
        continue: 'Continue',
    },
    flags: {
        header: 'Flags for',
        noFlags: 'No flags found',
        resolved: 'Yes, by {0} on {1}',
        notResolved: 'No',
    },
    notes: {
        header: 'Notes for',
        noNotes: 'No notes found',
        addNote: 'Add notes',
        notes: 'Notes',
        placeholder: 'Add a note...',
    },
    stats: {
        title: 'Stats',
        plugins: 'Plugins',
        reviews: 'Reviews',
        uploads: 'Uploads',
        downloads: 'Downloads',
        totalDownloads: 'Total Downloads',
        unsafeDownloads: 'Unsafe Downloads',
        flags: 'Flags',
        openedFlags: 'Opened Flags',
        closedFlags: 'Closed Flags',
    },
    health: {
        title: 'Hangar Health Report',
        noTopicProject: 'Missing discussion topic',
        erroredJobs: 'Failed jobs',
        jobText: 'Job type: {0}, Error Type: {1}, Happened: {2}',
        staleProject: 'Stale projects',
        notPublicProjects: 'Hidden projects',
        noPlatform: 'No platform detected',
        missingFileProjects: 'Missing File',
        empty: 'Empty! All good!',
    },
    message: 'Good morning!',
};

export default msgs;
