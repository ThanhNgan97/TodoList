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
import { Edit2, Element4, 
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

const HomeScreen = () => {

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null; // hoặc có thể trả về <ActivityIndicator />
  }

  return (
    <Container>
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
                </View>
                <TextComponent 
                  text='Due, 2023 Match 03'
                  size={12}
                   color={colors.gray}
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
    </Container>
    
  )
        
}

export default HomeScreen