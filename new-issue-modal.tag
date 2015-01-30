<new-issue-modal>
  <div class="modal" id="new-issue-modal">
      <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">New issue</h4>
      </div>
      <div class="modal-body">
        <form onsubmit="{createIssue}">
          <div class="form-group">
            <label for="title" class="control-label">Title:</label>
            <input type="text" class="form-control" id="title">
          </div>
          <div class="form-group">
            <label for="status" class="control-label">Status:</label>
            <input type="text" class="form-control" id="status">
          </div>
          <div class="form-group">
            <label for="label" class="control-label">Label:</label>
            <input type="text" class="form-control" id="label">
          </div>

          <button>Add</button>
          
        </form>
      </div>
    </div>
    var self = this
    createIssue(){
      var newIssue = {
        status: this.status.value,
        title: this.title.value,
        label: this.label.value,
        id: new Date().getTime()
      }
      issueStore.trigger("addIssue",newIssue)
      $('#new-issue-modal').modal('hide')
      self.cleanView()
    }

    cleanView(){
      self.status.value = ""
      self.title.value = ""
      self.label.value = ""
    }
    
</new-issue-modal>
