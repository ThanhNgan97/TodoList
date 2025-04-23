import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionConponent from '../components/SetionComponet';
import TextComponent from '../components/TextComponent';
import { useCustomFonts } from '../hooks/useCustomFonts';
import TitleComponent from '../components/TitleComponent';
import { globalStyles } from '../styles/globalStyles';
import CardComponent from '../components/CardComponent';
import { Add, Edit2, Element4, 
    Notification, 
    SearchFavorite, 
    SearchNormal1, 
    TableDocument } from 'iconsax-react-nativejs';
import { colors } from '../constant/colors';
import IonIcons from 'react-native-vector-icons'
import TagComponent from '../components/TagComponent';
import SpaceComponent from '../components/SpaceComponent';
import CicularComponent from '../components/CicularComponent';
import CardmageComponent from '../components/CardmageComponent';
import AvataGroup from '../components/AvataGroup';
import ProgressBarComponent from '../components/ProgressBarComponent';
import ScrollContainer from '../components/ScrollContainer';

const HomeScreen = ({navigation}:any) => {

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null; // hoặc có thể trả về <ActivityIndicator />
  }

  return (
    <View style={{flex:1}}>
      <ScrollContainer>
      <SectionConponent>
        <RowComponent justify="space-between">
          <Element4 size = {24}  color ={colors.silver}/>
          <Notification size = {24} color= {colors.silver}/>
        </RowComponent>
      </SectionConponent>

      <SectionConponent>
        <TextComponent text='Hi, Hai Dang'/>
        <TitleComponent text = 'Be Productive today'/>
      </SectionConponent>

      <SectionConponent>
        <RowComponent 
          styles={[globalStyles.inputContainer]}
          onPress={() => console.log('Say hi')}>
            <TextComponent color='#696B6F' text ='Search task'/>
            <SearchNormal1 size = {18} color={colors.silver}/>
        </RowComponent>
      </SectionConponent>

      <SectionConponent>
        <CardComponent>
          <RowComponent>

            <View style={{flex:1}}>
              <TitleComponent text ="Task progress"/>
              <TextComponent text = "30/40 tasks done "/>
              <SpaceComponent height={12}/>
              <RowComponent justify='flex-start' styles={{marginTop:15}}>
                <TagComponent 
                  text ="March 22"
                  onPress = {() => console.log('Say hi!')}
                  />
              </RowComponent>
            </View>

            <View>
              <CicularComponent value = {80}/>
            </View>
          </RowComponent>
        </CardComponent>
      </SectionConponent>

      <SectionConponent>
        <RowComponent styles={{alignItems:'flex-start'}}>
          <View style ={{flex:1}}>
              <CardmageComponent>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[globalStyles.iconContainer]}>
                  <Edit2 size={20} color={colors.text}/>
                </TouchableOpacity>
                <TitleComponent text='UX Design'/>
                <TextComponent text ='Task managents moble app' size={13}/>
                <View style={{marginVertical:28}}>
                  <AvataGroup/>
                  <ProgressBarComponent 
                    percent={70} 
                    color="#0AACFF"
                    size = 'large'
                    />
                </View>
                <TextComponent 
                  text='Due, 2023 Match 03'
                  size={12}
                   color={colors.silver}
                  />
              </CardmageComponent>
          </View>

          <SpaceComponent width={16}/>

          <View style ={{flex:1}}>
              <CardmageComponent color='rgba(33,150,243,0.85)'>
              <TouchableOpacity
                  onPress={() => {}}
                  style={[globalStyles.iconContainer]}>
                  <Edit2 size={20} color={colors.text}/>
                </TouchableOpacity>
                <TitleComponent text='API Payment'/>
                <AvataGroup/>
                <ProgressBarComponent 
                  percent={40} 
                  color="#A2F068" 
                  size = 'large'/>
                
              </CardmageComponent>


              <SpaceComponent height={16}/>
              <View style ={{flex:1}}>
              <CardmageComponent color='rgba(18,181,22,0.85)'>
              <TouchableOpacity
                  onPress={() => {}}
                  style={[globalStyles.iconContainer]}>
                  <Edit2 size={20} color={colors.text}/>
                </TouchableOpacity>
                <TitleComponent text='Update work'/>
                <TextComponent text ='Revision home page' size={13}/>
              </CardmageComponent>
          </View>
          </View>

          
        </RowComponent>
      </SectionConponent>
      <SectionConponent>
        <TitleComponent text="Urgents tasks"/>
        <CardComponent>
          <RowComponent>

            <CicularComponent value={40} radius={40} titleFontSize={15}/>
            <View style={{
                flex:1, 
                justifyContent:'center',
                paddingLeft:12

                }}>
              <TextComponent text = 'Title of task'/>
            </View>
          </RowComponent>
        </CardComponent>
      </SectionConponent>
      </ScrollContainer>

      <View style={{
          position:'absolute',
          bottom:0,
          left:0,
          right:0,
          padding:20, 
          justifyContent:'center',
          alignItems:'center'
        }}>
          <TouchableOpacity
          onPress={() => navigation.navigate('AddNewTask')}
          activeOpacity={1}
          style ={[
              globalStyles.row, 
              {
                backgroundColor:colors.blue,
                padding:10,
                borderRadius:100,
                width:'80%',
                justifyContent:'center',
                alignItems:'center'
              }
             

              ]}>
            <TextComponent text='Add new task' flex={0}/>
            <Add size={22} color={colors.white}/>
          </TouchableOpacity>
        </View>
    </View>
    
  )
        
}

export default HomeScreen