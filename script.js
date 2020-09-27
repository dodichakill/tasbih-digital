
            let Counter = React.createClass({
                getInitialState: function() {
                    return {count: 0};
                },
    
                tambahClick: function() {
                    this.setState({count: this.state.count + 1});
                },

                kurangClick: function() {
                    this.setState({count: this.state.count - 1});
                },
                
                deleteClick: function() {
                    this.setState({count: this.state.count * 0});
                },
                
                render: function() {
                    return (
                        <div>
                            <center>
                            
                            <div className="Count-container" >
                                <h1 className="Count">{this.state.count}</h1>
                            </div>
                            
                            <div className="Box">
                             <button onClick={this.kurangClick} className="Kurang"> <span >-</span> </button>
                             <button onClick={this.tambahClick} className="Tambah"> <span >+</span>  </button>
                             <button onClick={this.deleteClick} className="Hapus"><span >C</span>  </button>
                            </div>
                            </center>
                        </div>
                    );
                }
            });
            
            ReactDOM.render(
                <Counter/>,
                document.getElementById('app')
            );
