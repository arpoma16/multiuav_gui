import './App.css';
import React, { useState , useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/system';
import { Navbar } from './components/Navbar';
import { Menu } from './components/Menu';
import './assets/css/photon.min.css'
import Toast from './components/Toast';
import { Adduav } from './components/Adduav';
import { Camera } from './components/Camera';
import { RosControl } from './components/RosControl';
import MapView from './Mapview/Mapview';
import MapPositions from './Mapview/MapPositions';
import MapMissions from './Mapview/MapMissions';
import MapSelectedDevice from './Mapview/MapSelectedDevice';
import DeviceList from './components/DeviceList';
import StatusCard from './components/StatusCard';

import { devicesActions } from './store';


const sidebarStyle= {
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: 0,
    top: '100px',
    height: `calc(100% - 200px)`,
    width: '360px',
    margin: '20px',
    zIndex: 3,
  };
  const middleStyle= {
    flex: 1,
    display: 'grid',
  };
  const contentListStyle= {
    pointerEvents: 'auto',
    gridArea: '1 / 1',
    zIndex: 4,
  };


function App() {
  const dispatch = useDispatch();
  const theme = useTheme();


  const devices = useSelector((state) => state.devices.items);
  const positions = useSelector((state) => state.data.positions);
  const selectedDeviceId = useSelector((state) => state.devices.selectedId);
  const [filteredPositions, setFilteredPositions] = useState([]);
  const selectedPosition = filteredPositions.find((position) => selectedDeviceId && position.deviceId === selectedDeviceId);
  
  let listdevices =Object.values(devices);

  const [AddUAVOpen, SetAddUAVOpen] = useState(false);

  const [list, setList] = useState([]);
  let toastProperties = null;
  const showToast = (type,description)=> {
    switch(type) {
      case 'success':
        toastProperties = {
          id: list.length+1,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c'
        }
        break;
      case 'danger':
        toastProperties = {
          id: list.length+1,
          title: 'Danger',
          description: 'This is a danger toast component',
          backgroundColor: '#d9534f'
        }
        break;
      case 'info':
        toastProperties = {
          id: list.length+1,
          title: 'Info',
          description: 'This is a info toast component',
          backgroundColor: '#5bc0de'
        }
        break;
      case 'warning':
        toastProperties = {
          id: list.length+1,
          title: 'Warning',
          description: 'This is a warning toast component',
          backgroundColor: '#f0ad4e'
        }
        break;
      default:
        toastProperties = [];
      }
      setList([...list, toastProperties]);
  }




  const onMarkerClick = useCallback((_, deviceId) => {
    dispatch(devicesActions.selectId(deviceId));
  }, [dispatch]);


  useEffect(() => {
  setFilteredPositions(Object.values(positions))
  }, [positions]); 

  return (
    <div className="App">
      <div className="window">
        <RosControl notification={showToast}>
          <Navbar SetAddUAVOpen={SetAddUAVOpen} />
          <Menu SetAddUAVOpen={SetAddUAVOpen} />
          <MapView>
            {AddUAVOpen && <Adduav SetAddUAVOpen={SetAddUAVOpen} />}
            <MapPositions positions={filteredPositions} onClick={onMarkerClick} selectedPosition={selectedPosition} showStatus />
            <MapMissions/>
            <MapSelectedDevice/>
          </MapView>
          <div style={sidebarStyle}>
              <div style={middleStyle}>
                <Paper square style={contentListStyle} >
                  <DeviceList devices={listdevices} />
                </Paper>
              </div>
          </div>
          <StatusCard
          deviceId={selectedDeviceId}
          position={selectedPosition}
          onClose={() => dispatch(devicesActions.selectId(null))}
          desktopPadding={theme.dimensions.drawerWidthDesktop}
          />
          <Camera
          deviceId={selectedDeviceId}
          position={selectedPosition}
          onClose={() => dispatch(devicesActions.selectId(null))}
          />
          <Toast toastlist={list} position="buttom-right" setList={setList} />
        </RosControl>
      </div>

    </div>
  );
}

export default App;