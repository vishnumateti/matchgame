import './index.css'

const ThumbnailImages = props => {
  const {imageDetails, thumbnailChange} = props
  const {thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    thumbnailChange(thumbnailUrl)
  }

  return (
    <li className="list-container">
      <button
        onClick={onClickThumbnail}
        className="thumbnail-button"
        type="button"
      >
        <img className="thumbnail-image" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailImages
