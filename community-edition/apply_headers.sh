#!/bin/bash

# Define the header
HEADER="// Copyright (c) 2026 Emirhan CAMCI. All rights reserved."

# Find all TS and JS files in packages, excluding node_modules
find ./packages -type f \( -name "*.ts" -o -name "*.js" \) -not -path "*/node_modules/*" | while read -r file; do
    # Check if header already exists
    if ! head -n 1 "$file" | grep -q "Copyright (c) 2026 Emirhan CAMCI"; then
        echo "Adding header to $file"
        # Prepend the header
        echo -e "$HEADER\n$(cat "$file")" > "$file"
    fi
done

echo "Headers applied successfully."
