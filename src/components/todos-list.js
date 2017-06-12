import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import heroku from '../assets/img/heroku-button.jpg';
import github from '../assets/img/github-button.jpg';

export default class TodosList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
          <div className="table">
            <table>
              <TodosListHeader />
              <tbody>
                  {this.renderItems()}
              </tbody>
          </table>
          <a href="https://evening-eyrie-59081.herokuapp.com/"><img src={heroku}></img></a>
          <a href="https://github.com/emreozcan3320/react-todos-app"><img src={github}></img></a>
        </div>

        );
    }
}
