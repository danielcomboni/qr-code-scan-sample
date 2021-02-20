export class WorkflowConstants {
  static STATUS_OPEN: string = "Open";
  static STATUS_ERROR: string = "Error";
  static STATUS_CLOSED: string = "Closed";
  static STATUS_ALL_OR = WorkflowConstants.STATUS_OPEN || WorkflowConstants.STATUS_CLOSED || WorkflowConstants.STATUS_ERROR;

  static SUB_STATUS_AWAITING_COMPARISON_APPROVAL: string = "AwaitingComparisonApproval";
  static SUB_STATUS_ERROR: string = "Error";
  static SUB_STATUS_CLOSED: string = "Closed";
  static WARNING: string = "warning";
  static DANGER: string = "danger";
  static SUCCESS: string = "success";

  static statusColours(statusOrSubStatus: string): string {
    if (statusOrSubStatus === WorkflowConstants.STATUS_OPEN) return WorkflowConstants.WARNING;

    if (statusOrSubStatus === WorkflowConstants.SUB_STATUS_AWAITING_COMPARISON_APPROVAL) return WorkflowConstants.WARNING;

    if (statusOrSubStatus === WorkflowConstants.STATUS_ERROR) return WorkflowConstants.DANGER;

    if (statusOrSubStatus === WorkflowConstants.SUB_STATUS_ERROR) return WorkflowConstants.DANGER;

    if (statusOrSubStatus === WorkflowConstants.STATUS_CLOSED) return WorkflowConstants.SUCCESS;

    if (statusOrSubStatus === WorkflowConstants.SUB_STATUS_CLOSED) return WorkflowConstants.SUCCESS;

    return "";
  }
}
