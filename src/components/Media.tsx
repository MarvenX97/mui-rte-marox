import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { ContentState, ContentBlock } from 'draft-js'
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import CreateIcon from '@material-ui/icons/Create';

interface IMediaProps extends WithStyles<typeof styles> {
    block: ContentBlock
    contentState: ContentState
    blockProps: any
    onClick: (block: ContentBlock) => void
}

const styles = ({ shadows }: Theme) => createStyles({
    root: {
        margin: "5px 0 1px",
        outline: "none"
    },
    editable: {
        cursor: "pointer",
        "&:hover": {
            boxShadow: shadows[3]
        }
    },
    focused: {
        boxShadow: shadows[3]
    },
    centered: {
        textAlign: "center"
    },
    leftAligned: {
        textAlign: "left"
    },
    rightAligned: {
        textAlign: "right"
    }
})

const Media: FunctionComponent<IMediaProps> = (props) => {
    const { url, width, height, alignment, type } = props.contentState.getEntity(props.block.getEntityAt(0)).getData()
    const { onClick, readOnly, focusKey } = props.blockProps

    const htmlTag = () => {
        const componentProps = {
            src: url,
            className: classNames(props.classes.root, {
                [props.classes.editable]: !readOnly,
                [props.classes.focused]: !readOnly && focusKey === props.block.getKey()
            }),
            width: width,
            height: type === "video" ? "auto" : height,
            onClick: () => {
                if (readOnly) {
                    return
                }
				console.log("Youtube Props block???",props.block);
                onClick(props.block)
            }
        }

        if (!type || type === "image") {
            return <img {...componentProps} />
        }
        if (type === "video") {

            return <video {...componentProps} autoPlay={false}  />
        }
        if (type === "youtube") {
            const youtubeDefaultwidth = componentProps.width ? componentProps.width : 560;
            const youtubeDefaultheight = componentProps.height ? componentProps.height : 315;
            const srcLink = componentProps.src.split('/')[3].split('v=')[1];
			console.log("Youtube Props update??? v2",componentProps);
			return <div className="relative border p-4 my-4 border-light-blue-800 ">
             <iframe width={youtubeDefaultwidth} height={youtubeDefaultheight} src={`https://www.youtube.com/embed/${srcLink}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            {!readOnly ?
                <div className="absolute -top-2.5 right-0 flex">
                   <CreateIcon onClick={componentProps.onClick} className="h-6 w-6 p-0.5 text-blue-500 rounded-full flex items-center justify-center bg-white hover:bg-opacity-25 hover:bg-gray-600 hover:text-white"/>
				   </div>
                : null}

        </div>
             
     }
        return null
    }

    return (
        <div className={classNames({
            [props.classes.centered]: alignment === "center",
            [props.classes.leftAligned]: alignment === "left",
            [props.classes.rightAligned]: alignment === "right"
        })}>
            {htmlTag()}
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(Media)
