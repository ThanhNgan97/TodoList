import { Platform, StyleSheet } from "react-native";
import { colors } from "../constant/colors";
import { fontsFamili } from "../constant/fontsFamili";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingTop:Platform.OS ==='ios' ? 42 :55,
    
    
  },

  row:{
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    flex:1
  },


  text: {
    fontSize: 13,
    fontFamily: fontsFamili.italic,
    color: colors.white,
  },

  section:{
    marginBottom:16,
    paddingHorizontal:20
  }, 
  
  inputContainer:{
    backgroundColor:colors.gray,
    borderRadius:12,
    paddingHorizontal: Platform.OS === 'ios' ? 12:8,
    paddingVertical: Platform.OS === 'ios' ? 12:10
  },

  tag:{
    paddingVertical:6,
    paddingHorizontal:18,
    borderRadius:100,
    backgroundColor:colors.blue
  },
  card:{
    // padding:12,
    borderRadius:12
  },
  iconContainer:{
    width:40, 
    height:40, 
    borderRadius:100, 
    backgroundColor:"rgba(0,0,0,0.15)", 
    justifyContent:'center', 
    alignItems:'center',
    marginBottom:16
  },
  scrolView:{
    flex:1
  }
  
});
