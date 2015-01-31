<issue-list>
  <ul>
    <li each={issues} onclick="{parent.selectIssue}">
      {title}( {status} )
    </li>
  </ul>
  <script>

  this.on('update', function(){
    this.issues = issueStore.get()    
  }.bind(this))

  selectIssue(event){
    issueStore.trigger('selectIssue', event.item.id)
  }
  </script>
</issue-list>
