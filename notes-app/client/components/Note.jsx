import React from 'react';
import Tooltip from 'rc-tooltip';

import './Note.less';
import 'rc-tooltip/assets/bootstrap.css';

const Note = React.createClass({
  render() {
    const TOOLTIP_CONTAINER = <span>Remove</span>;
    const style = {backgroundColor: this.props.color};

    return (
      <div className='Note' style={style}>
        <Tooltip animation='zoom' placement='top' overlay={TOOLTIP_CONTAINER}>
          <span className='Note__del-icon' onClick={this.props.onDelete}>
              <i alt='remove' className='zmdi zmdi-close'/>
          </span>
        </Tooltip>
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