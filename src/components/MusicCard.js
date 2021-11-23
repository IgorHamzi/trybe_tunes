import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Load from './Load';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      check: false,
      loading: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.favoritesSong = this.favoritesSong.bind(this);
  }

  componentDidMount() {
    this.favoritesSong();
  }

  async onInputChange() {
    const { music: { trackId } } = this.props;
    this.setState({ loading: true, check: true });
    await addSong(trackId);
    this.setState({ loading: false });
  }

  async favoritesSong() {
    const { music: { trackId } } = this.props;
    const favoriteMusic = await getFavoriteSongs();
    favoriteMusic.some((song) => song.trackId === trackId
      && this.setState({ check: true }));
  }

  render() {
    const {
      state: {
        check,
        loading,
      },
      onInputChange,
    } = this;
    const { music: { trackName, previewUrl, trackId } } = this.props;
    return (
      <div>
        <span>{trackName}</span>
        <audio
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        {loading ? <Load /> : (
          <label htmlFor="favoriteMusic">
            Favorita
            <input
              data-testid={ `checkbox-music-${trackId}` }
              id={ trackId }
              type="checkbox"
              checked={ check }
              onChange={ onInputChange }
            />
          </label>
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.string.isRequired,
};
