import * as React from "react";
import { TableBody, Table, Paper, TableRow, TableCell } from "@material-ui/core";
import { connect } from "react-redux";

@(connect( 
    (state: any) => {
        return {
            paidResults: state.paidResults
        }
    },
    undefined
) as any)
export default class extends React.Component<any, any>{
    
    render(){
        return (
            <Paper style={{marginTop: 30}}>
                <Table>
                    <TableBody>
                        {
                            this.props.paidResults.map(
                                (paidResult, index) => {
                                    return (
                                        <TableRow>
                                            <TableCell>
                                                {paidResult.desc}
                                            </TableCell>
                                            <TableCell>
                                                {paidResult.amount}
                                            </TableCell>
                                        </TableRow>
                                    );
                                }
                            )
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}