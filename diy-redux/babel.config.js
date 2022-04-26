module.exports = {
    presets: [
        '@babel/preset-typescript',
        '@babel/preset-flow',
        '@babel/preset-react',
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry"
            }
        ],
        
    ]
}