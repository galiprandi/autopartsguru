"use client";

import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { use, useEffect, useState } from "react";

library.add(fas);

export default function Icon(props: FontAwesomeIconProps) {
  const [iconProps, setIconProps] = useState(props);

  useEffect(() => {
    setIconProps(props);
  }, [props]);

  return <FontAwesomeIcon {...iconProps} />;
}
