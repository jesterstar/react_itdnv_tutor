import React from 'react';

import './Note.less';

const Note = React.createClass({
  render() {
    const style = { backgroundColor: this.props.color };

    return (
      <div className='Note' style={style}>
        <span className='Note_del-icon' onClick={this.props.onDelete}>del</span>
        {
          this.props.title
          ?
            <h4 className='Note__title'>{this.props.title}</h4>
          :
            null
        }
        <div className='Note__text'>{this.props.text}</div>
      </div>
    );
  }
});

export default Note;