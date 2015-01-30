<issue-list>
  <ul>
    <li each={issues} onclick="{parent.selectIssue}">
      {title}( {status} )
    </li>
  </ul>
  <script>
    var self = this
    self.issues = []
    this.on("mount", function(){
      issueStore.trigger('init')
    });
    issueStore.on('issue_list_changed', function(issueList){
      self.issues = issueList
      self.update()
    })

    selectIssue(event){
      issueStore.trigger('selectIssue', event.item.id)
    }
  </script>
</issue-list>
