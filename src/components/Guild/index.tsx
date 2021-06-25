import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from './styles'

import { GuildIcon } from "../GuildIcon";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

export function Guild({data, ...rest}){
  return(
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
      >
        <GuildIcon />

        <View style={styles.content}>
          <View>
            <Text style={styles.title}>
              {data.name}
            </Text>
          </View>
        </View>

    </TouchableOpacity>
  )
}