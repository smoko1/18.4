const movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		image: 'potter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		image: 'krolew.jpg'
	},
	{
		id: 3,
		title: 'Polityka',
		desc: 'Film o polityce',
		image: 'polityka.jpg'
	},
	{
		id: 4,
		title: 'Botoks',
		desc: 'Film o leczeniu',
		image: 'botoks.jpg'
	},

];

const MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function () {
		return (
			React.createElement('h2', {}, this.props.title)
		);
	}
});

const MovieDescription = React.createClass({
	propTypes: {
		description: React.PropTypes.string.isRequired,
	},
	render: function () {
		return (
			React.createElement('p', {}, this.props.description)
		);
	}
});

const MovieImage = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired,
	},
	render: function () {
		return (
			React.createElement('img', { src: this.props.image })
		);
	}
});


const MovieListItem = React.createClass({
	propTypes: {
		movie: React.PropTypes.shape({
			title: React.PropTypes.string.isRequired,
			desc: React.PropTypes.string.isRequired,
			image: React.PropTypes.string.isRequired,
		}).isRequired,
	},
	render: function () {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, { title: this.props.movie.title }),
				React.createElement(MovieDescription, { description: this.props.movie.desc }),
				React.createElement(MovieImage, { image: this.props.movie.image }),
			)
		)
	},
});


const createMovieItem = function(oneMovie){
	return (
		React.createElement(MovieListItem, {key: oneMovie.id, movie:oneMovie})
	)
}

const MoviesList = React.createClass({
		propTypes: {
		movies: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				title: React.PropTypes.string.isRequired,
				desc: React.PropTypes.string.isRequired,
				image: React.PropTypes.string.isRequired,
			}).isRequired
		).isRequired,
	},
	render: function () {
		return (
			React.createElement('ul', {},
				this.props.movies.map(createMovieItem)
			)
		);
	},
});

const element = React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement(MoviesList, {movies: movies})
)

ReactDOM.render(element, document.getElementById('app'));

