## Database Philosophy
Master Data

↓

Operational Data

↓

Transaction Data

↓

Configuration

↓

Analytics

##  Database Overview
| Domain | Tables |
| ------ | ------: |
| Organization | 5 |
| Client | 5 |
| Production | 10 |
| Workflow | 7 |
| Finance | 6 |
| HR | 6 |
| Notifications | 4 |
| Analytics | 5 |

## Layer 1 — Organization
- organizations
- departments
- roles
- permissions
- employees
- employee_roles

## Layer 2 — Client
- clients
- brands
- campaigns
- contracts
- client_contacts

## Layer 3 — Production
- projects
- project_members
- work_items
- work_definitions
- workflow_templates
- workflow_stages
- workflow_transitions
- assignments
- deliverables
- assets

## Layer 4 — Resource Management
- resources
- resource_types
- resource_availability

## Layer 5 — Scheduling
- schedules
- schedule_resources

## Layer 6 — HR
- attendance
- leave_requests
- leave_balances
- salary_records
- salary_transactions

## Layer 7 — Finance
- invoices
- payments
- ledger_entries
- payment_allocations
- expenses

## Layer 8 — Notifications
- notifications
- notification_channels
- notification_deliveries
- notification_templates

## Layer 9 — Analytics
- employee_metrics
- project_metrics
- client_metrics
- finance_metrics
- daily_metrics

## Universal Columns
- id UUID PRIMARY KEY
- organization_id UUID
- code VARCHAR UNIQUE
- status
- created_at
- updated_at
- created_by
- updated_by
- deleted_at

# Audit Strategy
## PostgreSQL
- Current state.
- Business history (assignments, workflow history, payments).

## MongoDB
- API logs.
- Request traces.
- Error logs.
- Debug logs.
- Integration payloads.

