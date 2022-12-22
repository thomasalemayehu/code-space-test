import React, { useState } from "react";
import "../../assets/day5/styles/index.css";
import CoverImage from "../../assets/day5/images/podcast-cover.png";
import Checked from "../../assets/day5/icons/checkbox--checked.svg";
import UnChecked from "../../assets/day5/icons/checkbox--unchecked.svg";

import { useSelector,useDispatch } from "react-redux";
import { selectPodcast,selectMultiple } from "./features/podcastCheckboxSlice";
const PodcastCheckbox = () => {
  const [multiSelectStart, setMultiSelectStart] = useState(null);
  // const [multiSelectEnd, setMultiSelectEnd] = useState(null);

  const dispatch = useDispatch();
  const podcasts = useSelector((state) => state.podcastCheckbox.podcasts);

  const onPodcastSelect = (e, podcastId) => {
    // if shift key pressed
    if (e.nativeEvent.shiftKey) {

      // if start is already selected
      if (multiSelectStart) {
        dispatch(selectMultiple({ startId:multiSelectStart,endId:podcastId }));
        setMultiSelectStart(null);
      }
    } else {
      setMultiSelectStart(podcastId);
      dispatch(selectPodcast(podcastId));

    }
  };
  return (
    <div className="podcast-checkbox-container">
      <div className="podcast-checkbox-wrapper">
        <img src={CoverImage} className="podcast-checkbox-cover-image" alt="" />
        <div className="podcast-checkbox-content-wrapper">
          <h1>LISTEN TO ALL THE COMPRESSED.FM EPISODES</h1>

          <div className="podcast-checkbox-list-view">
            {podcasts.map((podcast) => (
              <div
                key={podcast.id}
                className="podcast-checkbox-podcast-item-wrapper"
              >
                <img src={podcast.isSelected ? Checked:UnChecked} alt="" className="podcast-checkbox-image" onClick={(e) => {
                  onPodcastSelect(e,podcast.id);
                }}/>
                <p key={podcast.id}>
                  {podcast.id} || {podcast.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCheckbox;
