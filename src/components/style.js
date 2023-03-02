import { StyleSheet } from 'react-native';

export const STEP_NUMBER_RADIUS: number = 14;
export const STEP_NUMBER_DIAMETER: number = STEP_NUMBER_RADIUS * 2;
export const ZINDEX: number = 100;
export const MARGIN: number = 13;
export const OFFSET_WIDTH: number = 4;
export const ARROW_SIZE: number = 6;

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: ZINDEX,
  },
  arrow: {
    position: 'absolute',
    borderColor: 'transparent',
    borderWidth: ARROW_SIZE,
  },
  tooltip: {
    position: 'absolute',
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden',
  },
  tooltipText: {
    color: '#FFF',
    fontSize: 18,
  },
  tooltipContainer: {
    flex: 1,
  },
  stepNumberContainer: {
    position: 'relative',
    marginTop: 10,
    width: STEP_NUMBER_DIAMETER,
    height: STEP_NUMBER_DIAMETER,
    overflow: 'hidden',
    zIndex: ZINDEX + 1,
  },
  stepNumber: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: STEP_NUMBER_RADIUS,
    borderColor: '#424242',
    backgroundColor: '#81F7D8',
  },
  stepNumberText: {
    fontSize: 12,
    backgroundColor: 'transparent',
    color: '#000',
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: '#81F7D8',
    fontSize: 18,
    fontWeight: 'bold'
  },
  bottomBar: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  overlayRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  overlayContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});