riot.tag('create-issue-button', '<button data-target="#new-issue-modal" data-toggle="modal"> New issue </button>', function(opts) {

});
  

riot.tag('issue-detail', '<h3>{issue.title}<h3> Author: {issue.author} Creation Date: {issue.creationDate} Last Update Date: {issue.lastUpdateDate} Status: {issue.status} Labels: <ul> <li each="{issue.labels}"> {label} </li> </ul>', function(opts) {
  this.on('update', function(){
    this.issue = issueStore.getCurrentIssue()
  }.bind(this))
    this.doSomething = function() {
      console.log("print something crazy on the console");
    }.bind(this);
  
});

riot.tag('issue-list', '<ul> <li each="{issues}" onclick="{parent.selectIssue}"> {title}( {status} ) </li> </ul>', function(opts) {

  this.on('update', function(){
    this.issues = issueStore.get()    
  }.bind(this))

    this.selectIssue = function(event) {
      issueStore.trigger('selectIssue', event.item.id)
    }.bind(this);
  
});

riot.tag('new-issue-modal', '<div class="modal" id="new-issue-modal"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title" id="exampleModalLabel">New issue</h4> </div> <div class="modal-body"> <form onsubmit="{createIssue}"> <div class="form-group"> <label for="title" class="control-label">Title:</label> <input type="text" class="form-control" id="title"> </div> <div class="form-group"> <label for="status" class="control-label">Status:</label> <input type="text" class="form-control" id="status"> </div> <div class="form-group"> <label for="label" class="control-label">Label:</label> <input type="text" class="form-control" id="label"> </div> <button>Add</button> </form> </div> </div>', function(opts) {
    var self = this
    this.createIssue = function() {
      var newIssue = {
        status: this.status.value,
        title: this.title.value,
        label: this.label.value,
        id: new Date().getTime()
      }
      issueStore.trigger("addIssue",newIssue)
      $('#new-issue-modal').modal('hide')
      self.cleanView()
    }.bind(this);

    this.cleanView = function() {
      self.status.value = ""
      self.title.value = ""
      self.label.value = ""
    }.bind(this);
    

});
