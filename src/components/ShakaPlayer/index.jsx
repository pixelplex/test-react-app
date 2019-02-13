/* eslint-disable react/no-string-refs,jsx-a11y/media-has-caption */
import React, { Component } from 'react';
import shaka from 'shaka-player';
import PropTypes from 'prop-types';

class ShakaPlayer extends Component {

	componentDidMount() {
		shaka.polyfill.installAll();

		if (shaka.Player.isBrowserSupported()) {
			// Init player if the browser is supported
			this.initPlayer();
		} else {
			console.error('Browser not supported!');
		}
	}

	onError(error) {
		console.error('Error code', error.code, 'object', error);
	}

	onErrorEvent(event) {
		this.onError(event.detail);
	}

	initPlayer() {
		const { url } = this.props;
		const video = document.getElementById('video');
		const player = new shaka.Player(video);

		// Listen error events
		player.addEventListener('error', this.onErrorEvent);

		// Try to load a video
		player.load(url).then(() => {
			// This runs if the asynchronous load is successful.
			console.log('The video has now been loaded!');
		}).catch(this.onError); // onError is executed if the asynchronous load fails.
	}

	render() {
		return (
			<video id="video" width="100%" controls autoPlay />
		);
	}

}

ShakaPlayer.propTypes = {
	url: PropTypes.string,
};

ShakaPlayer.defaultProps = {
	url: '',
};


export default ShakaPlayer;
