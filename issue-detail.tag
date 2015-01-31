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

  <script>
  this.on('update', function(){
    this.issue = issueStore.getCurrentIssue()
  }.bind(this))
    doSomething(){
      console.log("print something crazy on the console");
    }
  </script>

</issue-detail>
