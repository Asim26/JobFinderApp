import {StyleSheet} from 'react-native';
import {RF} from '../../../shared/theme/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2,
    paddingHorizontal: RF(14),
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: RF(20),
    // borderWidth: 2,
  },
  profilePic: {
    width: RF(40),
    height: RF(40),
    borderRadius: RF(20),
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 2,
  },
  searchButton: {
    width: '82%',
    borderRadius: RF(8),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: RF(10),
  },
  searchButtonText: {
    fontSize: RF(16),
  },

  thirdRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: RF(20),
    // borderWidth: 2,
  },
  popularText: {
    fontSize: RF(20),
    fontWeight: '800',
  },
  showAllText: {
    fontSize: RF(14),
  },
  jobsContainer: {
    // borderWidth: 2,
    paddingVertical: RF(2),
  },
});

export default styles;
