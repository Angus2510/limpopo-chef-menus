export type UserType = "Staff" | "Student" | "Guardian";

export type Permission =
  | "admin_access"
  | "view_dashboard"
  | "view_students"
  | "view_results"
  | "view_assignments"
  | "mark_tests_tasks"
  | "view_mark_tests_tasks"
  | "view_tests_tasks"
  | "edit_tests_tasks"
  | "create_tests_tasks"
  | "delete_tests_tasks"
  | "moderate_tests_tasks"
  | `view_${string}`
  | `edit_${string}`
  | `upload_${string}`;
