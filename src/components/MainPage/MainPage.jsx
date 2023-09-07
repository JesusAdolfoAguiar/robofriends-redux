import React, { Component } from 'react';

import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import './MainPage.css';
import Scroll from '../Scroll/Scroll';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import Header from '../Header/Header';

class MainPage extends Component {

    componentDidMount() {
        this.props.onRequestRobots()
    }

    filterRobots = robots => {
        return robots.filter (robot => {
            return robot.name.toLocaleLowerCase().includes(this.props.searchField.toLocaleLowerCase());
        })
    }

    render(){
        const { onSearchChange, robots, isPending } = this.props;

        return isPending ?
            <h1 className='tc'>Loading</h1> :
                (<div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={this.filterRobots(robots)}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>)
    }
}

export default MainPage;
