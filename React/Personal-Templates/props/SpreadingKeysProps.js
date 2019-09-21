import React from "react";

export default function SpreadingKeysProps() {
  return (
    <div>
      <div className="directory-menu">
        {/* gets all fields from item and spreads them as key names*/}
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
      );
    </div>
  );
}
