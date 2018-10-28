import * as React from 'react';
import { fetchData } from './api';
import { InfoPanel } from './components/InfoPanel/InfoPanel';
import { Resources } from './components/Resources/Resources';
import { Tags } from './components/Tags/Tags';

class App extends React.Component {

  public state = {
    data: {
      organization: undefined,
      resources: undefined,
      tags: undefined,
      title: undefined,
    },
  }

  public componentDidMount() {
    fetchData('cabinet-office-energy-use')
      .then(data => this.setState({
        data: data.result,
      }))
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.data.title}</h1>
        </header>
        <InfoPanel {...this.state.data.organization || {}}/>
        <div className="content">
          <Resources resources={this.state.data.resources || []}/>
          <Tags tags={this.state.data.tags || []} />
        </div>
      </div>
    );
  }
}

export default App;
