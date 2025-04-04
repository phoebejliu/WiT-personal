```
hsbc-project/
│
├── assets/                              # Static resources
│   ├── images/                          # Image files
│   ├── fonts/                           # Font files
│   └── icons/                           # Icon files
│
├── css/
│   ├── components/                      # Component styles
│   │   ├── buttons.css                  # Button styles
│   │   ├── content-box.css              # Content box styles
│   │   └── sidebar.css                  # Sidebar styles
│   ├── layouts/                         # Layout styles
│   │   └── two-column.css               # Two-column layout
│   ├── base/                            # Base styles
│   │   ├── reset.css                    # Reset styles
│   │   └── typography.css               # Typography styles
│   ├── pages/
│   │   ├── landing-page.css             # Landing page styles
│   │   ├── category-list.css            # Category list page styles
│   │   └── candidate-description.css    # Candidate description page styles
│   └── main.css                         # Main style file (optional)
│
├── js/
│   ├── components/                      # Component scripts
│   │   ├── collapsible.js               # Collapsible content box script
│   │   └── voting-system.js             # Voting system script
│   ├── utils/                           # Utility functions
│   │   └── helpers.js                   # Helper functions
│   └── pages/
│       ├── landing-page.js              # Landing page script
│       ├── category-list.js             # Category list page script
│       └── candidate-description.js     # Candidate description page script
│
├── pages/
│   ├── index.html                       # Main page/landing page
│   ├── category-list.html               # Category list page
│   └── candidate-description.html       # Candidate description page
│
├── shared/                              # Shared components (provided by other team members)
│   ├── header.html                      # Website header
│   └── footer.html                      # Website footer
│
└── README.md                            # Project documentation
```

## File Naming Conventions

1. **Use lowercase letters and hyphens**:
   - `category-list.html` instead of `CategoryList.html` or `category_list.html`

2. **Use descriptive names**:
   - `candidate-description.css` is clearer than `page2.css`

3. **Use nouns for component files**:
   - `buttons.css`, `collapsible.js`

4. **Use page names for page files**:
   - `landing-page.html`, `candidate-description.html`

## Team Collaboration Tips

1. **Use shared folders for common components**:
   - Place header, footer, etc. in the shared/ directory
   - Use server-side includes (SSI) or a templating system to include these components

2. **Document your components**:
   - Explain how to use your components in the README.md
   - Provide clear API documentation

3. **Use version control**:
   - Use a clear branching strategy in Git
   - Consider using feature branches for new functionality

4. **Create a style guide**:
   - Include a style guide page in your project
   - Showcase various components and their usage

This structure keeps the project organization clear, making it easy for team members to understand their respective areas of responsibility while facilitating the reuse of shared components.
===
hsbc-project/
│
├── assets/                          # Static resources
│   ├── images/
│   ├── fonts/
│   └── icons/
│
├── css/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   ├── public/                  # Public page styles
│   │   ├── user/                    # Regular user page styles
│   │   └── admin/                   # Admin page styles
│   │       └── candidate-description.css
│   └── main.css
│
├── js/
│   ├── components/
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── auth.js                  # Authentication functions
│   │   └── permissions.js           # Permission checking functions
│   └── pages/
│       ├── public/
│       ├── user/
│       └── admin/
│           └── candidate-description.js
│
├── pages/
│   ├── public/                      # Public pages (login, etc.)
│   │   ├── index.html
│   │   └── login.html
│   ├── user/                        # Regular user pages
│   │   ├── dashboard.html
│   │   └── vote.html
│   └── admin/                       # Admin pages
│       ├── dashboard.html
│       └── candidate-description.html
│
├── shared/                          # Shared components
│
├── server/                          # Server-side code (if applicable)
│   ├── auth/                        # Authentication related
│   │   ├── login.php
│   │   └── permissions.php
│   └── api/                         # API endpoints
│
└── config/                          # Configuration files
    └── roles.json                   # Role definitions and permissions


    ====
hsbc-project/
│
├── assets/                          # Static resources
│   ├── images/                      # Image files
│   ├── fonts/                       # Font files
│   └── icons/                       # Icon files
│
├── css/
│   ├── components/                  # Component styles
│   │   ├── buttons.css              # Button styles
│   │   ├── content-box.css          # Content box styles
│   │   └── sidebar.css              # Sidebar styles
│   ├── layouts/                     # Layout styles
│   │   └── two-column.css           # Two-column layout
│   ├── base/                        # Base styles
│   │   ├── reset.css                # Reset styles
│   │   └── typography.css           # Typography styles
│   ├── pages/
│   │   ├── public/                  # Public page styles
│   │   │   └── landing-page.css     # Landing page styles
│   │   ├── user/                    # Regular user page styles
│   │   │   └── category-list.css    # Category list page styles
│   │   └── admin/                   # Admin page styles
│   │       └── candidate-description.css # Candidate description page styles
│   └── main.css                     # Main style file (optional)
│
├── js/
│   ├── components/                  # Component scripts
│   │   ├── collapsible.js           # Collapsible content box script
│   │   └── voting-system.js         # Voting system script
│   ├── utils/                       # Utility functions
│   │   ├── helpers.js               # Helper functions
│   │   ├── auth.js                  # Authentication functions
│   │   └── permissions.js           # Permission checking functions
│   └── pages/
│       ├── public/                  # Public page scripts
│       │   └── landing-page.js      # Landing page script
│       ├── user/                    # User page scripts
│       │   └── category-list.js     # Category list page script
│       └── admin/                   # Admin page scripts
│           └── candidate-description.js # Candidate description page script
│
├── pages/
│   ├── public/                      # Public pages (login, etc.)
│   │   ├── index.html               # Main landing page
│   │   └── login.html               # Login page (added)
│   ├── user/                        # Regular user pages
│   │   ├── dashboard.html           # User dashboard (added)
│   │   └── category-list.html       # Category list page (moved)
│   └── admin/                       # Admin pages
│       ├── dashboard.html           # Admin dashboard (added)
│       └── candidate-description.html # Candidate description page (moved)
│
├── shared/                          # Shared components
│   ├── header.html                  # Website header
│   └── footer.html                  # Website footer
│
├── server/                          # Server-side code (if applicable)
│   ├── auth/                        # Authentication related
│   │   ├── login.php                # Login handler
│   │   └── permissions.php          # Permission checker
│   └── api/                         # API endpoints
│
├── config/                          # Configuration files
│   └── roles.json                   # Role definitions and permissions
│
└── README.md                        # Project documentation