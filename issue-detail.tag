<issue-detail>
  <h3>{issue.title}<h3>
  Author: {issue.author}
  Creation Date: {issue.creationDate}
  Last Update Date: {issue.lastUpdateDate}
  Status: {issue.status}
  Labels:
  <ul>
    <li each={issue.labels}> {label} </li>
  </ul>
  
  this.on("mount", function(){
    issueStore.trigger('init')
  })

  var self = this

  issueStore.on('selected_issue_changed', function(issue){
    self.issue = issue
    self.update()
  })
  
</issue-detail>
