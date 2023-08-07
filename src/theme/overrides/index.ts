import { Theme } from "@mui/material";
import IconButton from "./IconButton";
import LinearProgress from "./LinearProgress";
import Tooltip from "./Tooltip";
import Popover from "./Popover";
import Icon from "./Icon";
import SvgIcon from "./SvgIcon";
import Link from "./Link";
import Flatpickr from "./Flatpickr";
import Slider from "./Slider";
import Sidenav from "./Sidenav";
import Divider from "./Divider";
import Container from "./Container";
import Breadcrumbs from "./Breadcrumbs";
import Avatar from "./Avatar";
import ButtonBase from "./ButtonBase";
import AppBar from "./AppBar";
import Tabs from "./tabs/Tabs";
import Tab from "./tabs/Tab";
import TableHead from "./table/TableHead";
import TableContainer from "./table/TableContainer";
import TableCell from "./table/TableCell";
import StepLabel from "./stepper/StepLabel";
import StepIcon from "./stepper/StepIcon";
import StepConnector from "./stepper/StepConnector";
import Step from "./stepper/Step";
import Stepper from "./stepper/Stepper";
import MenuItem from "./menu/MenuItem";
import Menu from "./menu/Menu";
import ListItemText from "./list/ListItemText";
import ListItem from "./list/ListItem";
import List from "./list/List";
import Autocomplete from "./form/Autocomplete";
import Checkbox from "./form/Checkbox";
import FormControlLabel from "./form/FormControlLabel";
import FormLabel from "./form/FormLabel";
import Input from "./form/Input";
import InputLabel from "./form/InputLabel";
import InputOutlined from "./form/InputOutlined";
import Radio from "./form/Radio";
import Select from "./form/Select";
import SwitchButton from "./form/SwitchButton";
import TextField from "./form/TextField";
import DialogActions from "./dialog/DialogActions";
import DialogContent from "./dialog/DialogContent";
import DialogContentText from "./dialog/DialogContentText";
import DialogTitle from "./dialog/DialogTitle";
import Dialog from "./dialog/Dialog";
import CardContent from "./card/CardContent";
import CardHeader from "./card/CardHeader";
import CardMedia from "./card/CardMedia";
import Card from "./card/Card";
import Button from "./button/Button";
import Globals from "src/theme/base/globals";

const overrides = (theme: Theme) => {
    return ({
        MuiCssBaseline: {
            styleOverrides: {
                ...Globals(theme),
                ...Flatpickr(theme),
                ...Container(theme),
            },
        },
        MuiDrawer: { ...Sidenav(theme) },
        MuiList: { ...List(theme) },
        MuiListItem: { ...ListItem(theme) },
        MuiListItemText: { ...ListItemText(theme) },
        MuiCard: { ...Card(theme) },
        MuiCardHeader: { ...CardHeader(theme) },
        MuiCardMedia: { ...CardMedia(theme) },
        MuiCardContent: { ...CardContent(theme) },
        MuiButton: { ...Button(theme) },
        MuiIconButton: { ...IconButton(theme) },
        MuiInput: { ...Input(theme) },
        MuiInputLabel: { ...InputLabel(theme) },
        MuiOutlinedInput: { ...InputOutlined(theme) },
        MuiTextField: { ...TextField(theme) },
        MuiMenu: { ...Menu(theme) },
        MuiMenuItem: { ...MenuItem(theme) },
        MuiSwitch: { ...SwitchButton(theme) },
        MuiDivider: { ...Divider(theme) },
        MuiTableContainer: { ...TableContainer(theme) },
        MuiTableHead: { ...TableHead(theme) },
        MuiTableCell: { ...TableCell(theme) },
        MuiLinearProgress: { ...LinearProgress(theme) },
        MuiBreadcrumbs: { ...Breadcrumbs(theme) },
        MuiSlider: { ...Slider(theme) },
        MuiAvatar: { ...Avatar(theme) },
        MuiTooltip: { ...Tooltip(theme) },
        MuiAppBar: { ...AppBar(theme) },
        MuiTabs: { ...Tabs(theme) },
        MuiTab: { ...Tab(theme) },
        MuiStepper: { ...Stepper(theme) },
        MuiStep: { ...Step(theme) },
        MuiStepConnector: { ...StepConnector(theme) },
        MuiStepLabel: { ...StepLabel(theme) },
        MuiStepIcon: { ...StepIcon(theme) },
        MuiSelect: { ...Select(theme) },
        MuiFormControlLabel: { ...FormControlLabel(theme) },
        MuiFormLabel: { ...FormLabel(theme) },
        MuiCheckbox: { ...Checkbox(theme) },
        MuiRadio: { ...Radio(theme) },
        MuiAutocomplete: { ...Autocomplete(theme) },
        MuiPopover: { ...Popover(theme) },
        MuiButtonBase: { ...ButtonBase(theme) },
        MuiIcon: { ...Icon(theme) },
        MuiSvgIcon: { ...SvgIcon(theme) },
        MuiLink: { ...Link(theme) },
        MuiDialog: { ...Dialog(theme) },
        MuiDialogTitle: { ...DialogTitle(theme) },
        MuiDialogContent: { ...DialogContent(theme) },
        MuiDialogContentText: { ...DialogContentText(theme) },
        MuiDialogActions: { ...DialogActions(theme) },
    });
};

export default overrides;
