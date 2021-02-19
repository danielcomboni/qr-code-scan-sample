export class WorkflowConstants {

  static STATUS_OPEN: string = "Open";
  static STATUS_ERROR: string = "Error";
  static STATUS_CLOSED: string = "Closed";
  static STATUS_ALL_OR = WorkflowConstants.STATUS_OPEN || WorkflowConstants.STATUS_CLOSED || WorkflowConstants.STATUS_ERROR;

  static SUB_STATUS_AWAITING_COMPARISON_APPROVAL: string = 'AwaitingComparisonApproval'
  static SUB_STATUS_ERROR: string = 'Error';
  static SUB_STATUS_CLOSED: string = 'Closed';
  static statusColours(statusOrSubStatus: string): string {
  
    if (statusOrSubStatus === WorkflowConstants.STATUS_OPEN)
      return "warning";
  
    if (statusOrSubStatus === WorkflowConstants.SUB_STATUS_AWAITING_COMPARISON_APPROVAL)
      return "warning";
  
    if (statusOrSubStatus === WorkflowConstants.STATUS_ERROR)
      return "danger"
  
      if (statusOrSubStatus === WorkflowConstants.SUB_STATUS_ERROR)
      return "danger"
  
    if (statusOrSubStatus === WorkflowConstants.STATUS_CLOSED)
      return "success"
  
    if (statusOrSubStatus === WorkflowConstants.SUB_STATUS_CLOSED)
      return "success"
    
    return "";
  }

}
