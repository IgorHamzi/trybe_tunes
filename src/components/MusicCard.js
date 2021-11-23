import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Load from './Load';
import { addSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      check: false,
      loading: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    // this.favoriteSave = this.favoriteSave.bind(this);
  }

  async onInputChange() {
    const { music: { trackId } } = this.props;
    this.setState({ loading: true, check: true });
    await addSong(trackId);
    this.setState({ loading: false });
  }

  // async favoriteSave(music) {
  //   console.log(music);
  //   this.setState({ loading: true });
  //   await addSong(music);
  //   this.setState({ loading: false });
  // }

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
        {/* {musicList.slice([1]).map((music) => (
          <>
            <h4 key={ music.artistId }>{music.trackName}</h4>
            <audio
              data-testid="audio-component"
              src={ music.previewUrl }
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
                  data-testid={ `checkbox-music-${music.trackId}` }
                  // value={ check }
                  id={ music.trackId }
                  // name="check"
                  type="checkbox"
                  checked={ check }
                  onChange={ () => onInputChange(music) }
                // defaultChecked={}
                />
              </label>
            )}
          </>
        ))}
        {loading && <Load />} */}
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.string.isRequired,
};
