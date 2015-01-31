var IssueStore = function(){
  riot.observable(this)
  var self = this;
  
  self.store = [
    {title:"Un problème dans le gui", id: 1, status:"Open"},
    {title:"Un problème dans le backend", id: 2, status:"Closed"}
  ]
  self.current_issue = null;

  this.on('addIssue', function(issue){
    self.store.push(issue)
    riot.update()
  })

  this.on('changeIssue', function(issue){
    self.store = _.map(self.store, function(current_issue){ 
      return (current_issue.id === issue.id ) ? issue : currentIssue 
    });
    riot.update()
  })

  this.on('selectIssue', function(issueId){
    var issue = _.find(self.store, function(issue){ return issue.id === issueId })
    self.current_issue = issue;
    riot.update()
  })
  
  this.get = function(){
    return self.store.slice(0)
  }
  this.getCurrentIssue = function(){
    return self.current_issue
  }
}
var issueStore = new IssueStore()


