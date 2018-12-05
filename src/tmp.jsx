deleteFinish = event => {
    event.preventDefault()
    console.log('this.props in FinishDelete is ', this.props)
    const user = this.props.user
    const finishId = this.props.id

    apiDeleteFinish(finishId, user)
      .then(handleErrors)
      .then(() => {
        if (this.props.detail === true) {
          this.props.history.push('/finishes')
        } else {
          this.props.changeHandler()
        }
      })
      .catch(() => console.log('error deleting ride!'))

  }

  render() {

    return (
      <div>
        <form onSubmit={this.deleteFinish}>
          <button type="submit">Remove ride</button>
        </form>
      </div>
    )
  }

  export const apiDeleteFinish = (finishId, user) => {
    return fetch(apiUrl + '/finishes/' + `${finishId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${user.token}`
      }
    })
  }