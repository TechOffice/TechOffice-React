import { FormLabel } from "@material-ui/core";
import * as React from "react";

export default (field: any) => (
    <FormLabel >{field.input.value}</FormLabel>
)