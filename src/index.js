import React, { Component } from 'react'; // knows how to work with components, how to translate them
import ReactDOM from 'react-dom'; // knows how to interact the components with the DOM
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDNRIW-6C8fQr6NY_KHNyReYt7G3MQYPDM';

class App extends Component {
    constructor(props){
        super(props)
        this.state = { 
            videos: [],
            selectedVideo: null,
        };

         YTSearch({key: API_KEY, term: 'Sinjin Hawke'}, (videos) => {
            this.setState({ 
                videos,
                selectedVideo: videos[0],
             });
        });
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList onVideoSelect={ selectedVideo => this.setState({ selectedVideo })}
                videos={ this.state.videos } />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));