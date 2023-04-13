import palette from '../common/palette';
import { loadImage, prepareIcon } from './mapUtil';

import backgroundSvg from '../resources/images/background.svg';
import directionSvg from '../resources/images/direction.svg';

import planeSvg from '../resources/images/icon/plane.svg';
import helicopterSvg from '../resources/images/icon/helicopter.svg';
import droneSvg from '../resources/images/icon/drone1.svg';
import dronedjiSvg from '../resources/images/icon/drone2.svg';
import dronePx4Svg from '../resources/images/icon/drone3.svg';

const colors = {1: '#F34C28' , 2: '#F39A28',3: '#1EC910 ',4: '#1012C9',5: '#C310C9',6: '#1FDBF1',7: '#F6FD04',8: '#808080'}

export const mapIcons = {
    helicopter: helicopterSvg,
    plane: planeSvg,
    drone: droneSvg,
    dji: dronedjiSvg,
    px4: dronePx4Svg,
    default: planeSvg,
};

export const mapIconKey = (category) => (mapIcons.hasOwnProperty(category) ? category : 'default');


export const mapImages = {};

export default async () => {
    const background = await loadImage(backgroundSvg);
    mapImages.background = await prepareIcon(background);
    mapImages.direction = await prepareIcon(await loadImage(directionSvg));
    Object.keys(colors).forEach((color) => {
      mapImages[`background-${color}`] = prepareIcon(background, null, colors[color]);
    });
    await Promise.all(Object.keys(mapIcons).map(async (category) => {
      const results = [];
      ['primary', 'positive', 'negative', 'neutral'].forEach((color) => {
        results.push(loadImage(mapIcons[category]).then((icon) => {
          mapImages[`${category}-${color}`] = prepareIcon(background, icon, palette.colors[color]);
        }));
      });
      await Promise.all(results);
    }));
    console.log("preload icon")
    console.log(mapImages)
  };