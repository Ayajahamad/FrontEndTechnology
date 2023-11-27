import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import key from '../config/token';

const URL = "https://api.spotify.com";

const Track = () => {

  const [tracks,setTracks] = useState([]);
  const params = useParams();// used to write the router parameters
  const [view,setView] = useState(false);

  const searchTracks = async () => {
    await fetch(`${URL}/v1/artists/${params.artistId}/top-tracks?market=IN`,{
      method:`GET`,
      headers:{
        Authorization: `Bearer ${key}`,
        'Content-Type':'application/json'
      }
    }).then(res=>res.json()).then(out=>{
      setTracks(out.tracks);
      console.log(out)
    }).catch(error => console.log(error.message));
  }
  useEffect(()=>{searchTracks()},[]);

  const trackIcon = (url) => {
    if(!url)
    return <strong className='text-danger'>No Tracks</strong>

    else
    return <strong className="text-success">Track</strong>
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="display-3 text-success text-center">Track</h1>
            </div>
        </div>
        <div className="row">
          {
            tracks.map((item,index)=>{
              const [id,name,album,preview_url,duration_ms] = item;

              return(
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" key={index}>
                  {
                    view ? (
                      <div className="card">
                    <img src={album ? album.images[0].url : ''} alt="" className='img-fluid card-img-top'/>
                    <div className="card-body">
                      <h5 className="text-success text-center">{name}</h5>
                    </div>
                    <div className="card-footer">
                      {trackIcon(preview_url)}
                    </div>
                  </div>
                    ): (
                      <ul className="list-group">
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-md-3 col-sm-3">
                              <img src={album ? album.images[0].url : ''} alt="no image" className='img-fluid rounded-circle' />
                            </div>
                            <div className="col-md-6 col-sm-6 text-center">
                              <h6 className="text-success text-uppercase">
                                {name}
                                <p className="text-danger float-end">
                                  Time: {duration_ms}
                                </p>
                              </h6>
                            </div>
                            <div className="col-md-3 col-sm-3">

                            </div>
                          </div>
                        </li>
                      </ul>
                    )
                  }
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Track
