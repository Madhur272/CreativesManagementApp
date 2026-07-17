## Master Data
- Employee
- Department
- Role
- Permission
- Client
- Brand
- WorkflowTemplate
- WorkDefinition

## Operational Data
- Project
- WorkItem
- Assignment
- Deliverable
- Asset
- Schedule
- Notification

## Transaction Data
- Attendance
- Leave
- Salary
- Invoice
- Payment
- Audit Log
- Workflow History
- Assignment History

## Reference Data
- Priority
- Status
- Country
- Currency
- FileType
- LeaveType
- Holiday
- AssetType

## Analytics
- Employee Metrics
- Department Metrics
- Project Metrics
- Client Metrics
- Revenue Metrics

# Aggregate Map
## Employee Aggregate
Employee Owns
- Attendance
- Leave
- Salary
- Notifications

##  Client Aggregate 
Client Owns
- Brands
- Contracts

Brand owns
- Campaigns

Campaign owns
- Projects

## Project Aggregate
Project Owns
- Members
- Calendar
- Drive
- WorkItems

## Work Aggregate
WorkItem Owns
- Assignments
- Checklist
- Comments
- Dependencies
- Workflow State
- History

## Deliverable Aggregate 
Deliverable Owns
- Versions
- Assets
- Approvals
- Exports
- Delivery Records

# Entity Relationships
## Entity Relationships
Employee (1)

↓

Many Assignments

↓

Many Attendance

↓

Many Leave Requests

↓

Many Notifications

## Client
Client (1)

↓

Many Brands

## Brand
Brand (1)

↓

Many Campaigns

## Campaign
Campaign (1)

↓

Many Projects

## Project
Project (1)

↓

Many WorkItems

↓

Many Members

↓

Many Assets

↓

Many Calendar Events

## Work Item
Work Item (1)

↓

Many Assignments

↓

Many Comments

↓

Many Checklist Items

↓

Many Dependencies

↓

One Workflow

## Deliverable
Deliverable (1)

↓

Many Versions

↓

Many Assets

↓

Many Approval Records

## Cross-Aggregate Rules 
- A WorkItem cannot directly modify a Project. It can only publish an event (e.g., WORK_COMPLETED) that the Project aggregate reacts to if appropriate.
- Deliverable never changes WorkItem status directly. Approval of a deliverable emits an event that the workflow engine evaluates.
- Attendance and Leave are part of the Employee aggregate, but the scheduling engine may consume their events to block new assignments.
- Finance does not query production tables for business decisions. It relies on published events and references (e.g., completed deliverables, approved invoices).

# Entity Attributes 
| Entity | Identity | Owns | Publishes |
| ------ | ------ | ------ | ------ | 
| Employee | UUID | Attendance, Leave | EmployeeActivated, EmployeeDeactivated |
| Client | UUID | Brands | ClientCreated |
| Brand | UUID | Campaigns | BrandUpdated |
| Campaign | UUID | Projects | CampaignArchived |
| Project | UUID | Work Items | ProjectCreated, ProjectArchived |
| WorkItem | UUID | Assignments, Workflow State | WorkAssigned, WorkCompleted |
| Deliverable | UUID |Versions, Assets | DeliverableApproved |
| Assignment | UUID | — | AssignmentAccepted, AssignmentReassigned |
