# Beads (bd) Command Demo

*2026-02-20T20:44:47Z by Showboat 0.6.0*
<!-- showboat-id: 55da7a3d-6e57-4eb9-aa77-b5ac8f14ab69 -->

```bash
bd --help
```

```output
Issues chained together like beads. A lightweight issue tracker with first-class dependency support.

Usage:
  bd [flags]
  bd [command]

Maintenance:
  rename-prefix    Rename the issue prefix for all issues in the database

Integrations & Advanced:
Working With Issues:
  children         List child beads of a parent
  close            Close one or more issues
  comments         View or manage comments on an issue
  create           Create a new issue (or multiple issues from markdown file)
  create-form      Create a new issue using an interactive form
  delete           Delete one or more issues and clean up references
  edit             Edit an issue field in $EDITOR
  gate             Manage async coordination gates
  label            Manage issue labels
  list             List issues
  merge-slot       Manage merge-slot gates for serialized conflict resolution
  move             Move an issue to a different rig with dependency remapping
  promote          Promote a wisp to a permanent bead
  q                Quick capture: create issue and output only ID
  query            Query issues using a simple query language
  refile           Move an issue to a different rig
  reopen           Reopen one or more closed issues
  search           Search issues by text query
  set-state        Set operational state (creates event + updates label)
  show             Show issue details
  state            Query the current value of a state dimension
  todo             Manage TODO items (convenience wrapper for task issues)
  update           Update one or more issues

Views & Reports:
  count            Count issues matching filters
  diff             Show changes between two commits or branches (requires Dolt backend)
  find-duplicates  Find semantically similar issues using text analysis or AI
  history          Show version history for an issue (requires Dolt backend)
  lint             Check issues for missing template sections
  stale            Show stale issues (not updated recently)
  status           Show issue database overview and statistics
  types            List valid issue types

Dependencies & Structure:
  dep              Manage dependencies
  duplicate        Mark an issue as a duplicate of another
  duplicates       Find and optionally merge duplicate issues
  epic             Epic management commands
  graph            Display issue dependency graph
  supersede        Mark an issue as superseded by a newer one
  swarm            Swarm management for structured epics

Sync & Data:
  branch           List or create branches (requires Dolt backend)
  export           Export issues to JSONL or Obsidian format
  federation       Manage peer-to-peer federation with other Gas Towns
  import           Import issues from JSONL format
  restore          Restore full history of a compacted issue from git
  sync             Export database to JSONL (Dolt persists writes immediately)
  vc               Version control operations (requires Dolt backend)

Setup & Configuration:
  config           Manage configuration settings
  dolt             Configure Dolt database settings
  hooks            Manage git hooks for bd auto-sync
  human            Show essential commands for human users
  info             Show database information
  init             Initialize bd in the current directory
  kv               Key-value store commands
  onboard          Display minimal snippet for AGENTS.md
  prime            Output AI-optimized workflow context
  quickstart       Quick start guide for bd
  setup            Setup integration with AI editors
  where            Show active beads location

Maintenance:
  doctor           Check and fix beads installation health (start here)
  migrate          Database migration commands
  preflight        Show PR readiness checklist
  sql              Execute raw SQL against the beads database
  upgrade          Check and manage bd version upgrades
  worktree         Manage git worktrees for parallel development

Integrations & Advanced:
  admin            Administrative commands for database maintenance
  jira             Jira integration commands
  linear           Linear integration commands
  repo             Manage multiple repository configuration

Additional Commands:
  agent            Manage agent bead state
  audit            Record and label agent interactions (append-only JSONL)
  blocked          Show blocked issues
  completion       Generate the autocompletion script for the specified shell
  cook             Compile a formula into a proto (ephemeral by default)
  defer            Defer one or more issues for later
  formula          Manage workflow formulas
  gitlab           GitLab integration commands
  help             Help about any command
  hook             Execute a git hook (called by hook scripts)
  mail             Delegate to mail provider (e.g., gt mail)
  mol              Molecule commands (work templates)
  orphans          Identify orphaned issues (referenced in commits but still open)
  ready            Show ready work (open, no active blockers)
  rename           Rename an issue ID
  ship             Publish a capability for cross-project dependencies
  slot             Manage agent bead slots
  undefer          Undefer one or more issues (restore to open)
  version          Print version information

Flags:
      --actor string              Actor name for audit trail (default: $BD_ACTOR, git user.name, $USER)
      --allow-stale               Allow operations on potentially stale data (skip staleness check)
      --db string                 Database path (default: auto-discover .beads/*.db)
      --dolt-auto-commit string   Dolt backend: auto-commit after write commands (off|on). Default: on for embedded, off for server mode. Override via config key dolt.auto-commit
  -h, --help                      help for bd
      --json                      Output in JSON format
      --profile                   Generate CPU profile for performance analysis
  -q, --quiet                     Suppress non-essential output (errors only)
      --readonly                  Read-only mode: block write operations (for worker sandboxes)
      --sandbox                   Sandbox mode: disables auto-sync
  -v, --verbose                   Enable verbose/debug output
  -V, --version                   Print version information

Use "bd [command] --help" for more information about a command.
```

```bash
bd status
```

```output

📊 Issue Database Status

Summary:
  Total Issues:           0
  Open:                   0
  In Progress:            0
  Blocked:                0
  Closed:                 0
  Ready to Work:          0

For more details, use 'bd list' to see individual issues.

```

```bash
bd create "Test issue from showboat demo"
```

```output
⚠ Creating test issue in production database
  Title: "Test issue from showboat demo" appears to be test data
  Recommendation: Use isolated test database with BEADS_DB
    BEADS_DB=/tmp/test.db ./bd create "Test issue from showboat demo"
✓ Created issue: experiment1-yrs
  Title: Test issue from showboat demo
  Priority: P2
  Status: open
```

```bash
bd show experiment1-yrs
```

```output
○ experiment1-yrs · Test issue from showboat demo   [● P2 · OPEN]
Owner: Sprite · Type: task
Created: 2026-02-20 · Updated: 2026-02-20

```

```bash
bd update experiment1-yrs --status in_progress
```

```output
✓ Updated issue: experiment1-yrs
```

```bash
bd close experiment1-yrs
```

```output
✓ Closed experiment1-yrs: Closed
```
